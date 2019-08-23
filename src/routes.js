const { Router } = require('express');

const { isProduction, server } = require('./config/environment');
const { logger } = require('./lib');
const apiRoutes = require('./api/api.routes');

const router = Router();

if (!isProduction)
  router.use(logger.routes);

// Base url for the Star Wars API!
router.use(server.apiRoot, apiRoutes);

// If adding webhooks or graphql, I would add them here (in a separate folder in ./src); e.g.,
// router.use('/webhooks', webhookRoutes);

module.exports = router;
