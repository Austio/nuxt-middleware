const middleware = {}

middleware['layoutMiddleware'] = require('../middleware/layoutMiddleware.js');
middleware['layoutMiddleware'] = middleware['layoutMiddleware'].default || middleware['layoutMiddleware']

middleware['pageMiddleware'] = require('../middleware/pageMiddleware.js');
middleware['pageMiddleware'] = middleware['pageMiddleware'].default || middleware['pageMiddleware']

middleware['routeMiddleware'] = require('../middleware/routeMiddleware.js');
middleware['routeMiddleware'] = middleware['routeMiddleware'].default || middleware['routeMiddleware']

export default middleware
