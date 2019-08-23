// I only grab the process env variables once, at startup
const {
  APP_API_ROOT,
  APP_DOMAIN,
  APP_HOST,
  APP_PORT,
  NODE_ENV,
} = process.env;

const isProduction = NODE_ENV === 'production';

module.exports = {
  isProduction,
  nodeEnv: NODE_ENV || 'development',
  server: {
    apiRoot: APP_API_ROOT || '/api',
    domain: APP_DOMAIN || '127.0.0.1',
    port: APP_PORT || 3000,
    host: APP_HOST || '0.0.0.0'
  },
  db: {
    // this is where I would add an db auth/config
  },
  // and of course any other environment data
};
