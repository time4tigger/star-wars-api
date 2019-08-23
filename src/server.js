const cors = require('cors');
const express = require('express');

const { isProduction, server } = require('./config/environment');
const routes = require('./routes');


class AppServer {
  static async start() {
    const server = new AppServer();
    return server.init();
  }

  constructor() {
    this.app = express();
    this.port = server.port;

    // if I were connecting to a database
    // this.db = TheImportedDbFile;

    this.server = null;
  }

  async init() {
    this.app.disable('x-powered-by');
    this.app.use(cors());

    // set up the routes
    this.app.use(routes);

    this._setupRouteErrorHandler();

    await new Promise(ok => {
      this.server = this.app.listen(this.port, ok);
    });

    return this;
  }

  _setupRouteErrorHandler() {
    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    });

    // TODO fix the error response
    // Print the stacktrace only if node environment is running in development
    this.app.use((err, req, res, next) => {
      const { message, stack, status } = err;
      const error = {};

      // Normally I like to create a custom app error handler/file that 'extends' Error
      if (!isProduction && status !== 404) {
        console.error(stack);

        Object.assign(error, err);
      }

      res
        .status(status || 500)
        .json({ error, message });
    });
  }

  async shutdown() {
    if (!this.server)
      return this;

    await new Promise(ok => this.server.close(ok));
    console.log('Server was shutdown');

    this.server = null;

    return this;
  }
}

module.exports = AppServer;
