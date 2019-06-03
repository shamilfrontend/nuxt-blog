const passport = require('passport');
const {Router} = require('express');
const router = Router();

const controller = require('../controllers/post.controller');

// api/auth//admin/login
router.post('/admin/login', controller.login);
router.post('/admin/create', controller.createUser);

module.exports = router;
