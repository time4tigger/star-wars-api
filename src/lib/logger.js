const { isProduction } = require('../config/environment');

const { log } = console;

const asyncLog = msg => Promise.resolve().then(() => log(msg));

// if this were a large app, I'd use
// a logging package on npm instead
exports.log = asyncLog;

// I like to view the routes if the app is running in development
exports.routes = ({ method, originalUrl }, res, next) => {
  if (isProduction)
    return next();

  asyncLog(`\n${method}: ${originalUrl}`);
  next();
};
