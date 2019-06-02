const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const keys = require('./keys');

mongoose.connect(keys.MONGO_URL)
  .then(() => {
    console.log('Database connected!');
  })
  .catch(error => console.error(error));

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app;
