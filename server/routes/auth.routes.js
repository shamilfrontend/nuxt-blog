const passport = require('passport');
const {Router} = require('express');
const router = Router();

const controller = require('../controllers/auth.controller');

// api/auth//admin/login
router.post('/admin/login', controller.login);
router.post(
  '/admin/create',
  passport.authenticate('jwt', {
    session: false
  }),
  controller.createUser
);

module.exports = router;
