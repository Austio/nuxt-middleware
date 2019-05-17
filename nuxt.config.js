export default {
  head: {
    title: 'Middleware',
  },
  router: {
    middleware: 'routeMiddleware'
  },
  serverMiddleware: [
    (req, res, next) => {
      console.log("---Server Middleware");
      next();
    }
  ]
}
