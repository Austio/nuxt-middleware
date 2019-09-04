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
    },
  ],

  build: {
    analyze: true,
    cache: true,
    hardSource: true,
    parallel: true,
    extend(config) {
      if (false) {
        const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
        const smp = new SpeedMeasurePlugin();
        return smp.wrap(config);
      }
    },
  },
}
