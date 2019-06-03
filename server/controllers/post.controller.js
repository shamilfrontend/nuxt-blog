const bcrypt = require('bcrypt-nodejs');

const Post = require('../models/post.model');

// admin
module.exports.create = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    imageUrl: `/${req.file.filename}`,
  });

  try {
    await post.save();
    res.status(201).json({post});
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find().sort({date: -1});
    res.status(200).json({posts});
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports.getById = async (req, res) => {
  try {
    await Post.findById(req.body.id)
      .populate('comments')
      .exec((error, post) => {
        req.status(200).json({post});
      });
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports.update = async (req, res) => {
  const $set = {
    text: req.body.text,
  };
  try {
    const post = await Post.findOneAndUpdate({
      _id: req.params.id,
      }, {$set}, {new: true});
    req.status(200).json({post});
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Post.deleteOne({
      _id: req.params.id
    });
    req.status(200).json({message: 'Пост удален'});
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports.addView = async (req, res) => {
  const $set = ++req.body.views;
  try {
    await Post.findOneAndUpdate({
      _id: req.params.id,
    }, {$set});
    res.status(204).json();
  } catch (e) {
    res.status(500).json(e);
  }
};
