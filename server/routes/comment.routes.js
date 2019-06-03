const {Router} = require('express');
const router = Router();

const controller = require('../controllers/comment.controller');

// api/auth//admin/login
router.post('/', controller.create);

module.exports = router;
