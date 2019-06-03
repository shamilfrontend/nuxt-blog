const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const keys = require('../keys/keys.dev');

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({login: req.body.login});

  if (candidate) {
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password);

    if (isPasswordCorrect) {
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id,
      }, keys.JWT, {expiresId: 60 * 60});
      res.status(200).json({token})
    } else {
      res.status(401).json({
        message: 'Пароль неверный',
      });
    }
  } else {
    res.status(404).json({
      message: 'Пользователь не найден',
    });
  }
};

module.exports.createUser = (req, res) => {
};

