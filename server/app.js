const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportStrategy = require('./middleware/passport-strategy');

// config keys
const keys = require('./keys');

// init app
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
passport.use(passportStrategy);

// routes
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const commentRoutes = require('./routes/comment.routes');

// routes init
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

// DB connect
mongoose.connect(keys.MONGO_URI, {
  useNewUrlParser: true
})
  .then(() => {
    console.log('Database connected!');
  })
  .catch(error => console.error(error));

module.exports = app;
