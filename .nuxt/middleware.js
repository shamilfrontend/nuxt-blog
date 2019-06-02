const middleware = {}

middleware['admin-auth'] = require('../middleware/admin-auth.js');
middleware['admin-auth'] = middleware['admin-auth'].default || middleware['admin-auth']

export default middleware
