require('dotenv').config();

const AppServer = require('./server');

console.log('\n--- API server starting up... ---');

AppServer
  .start()
  .then(server => console.log(`Server listening on port: ${server.port}`))
  .catch(err => console.error(err));

process.on('unhandledRejection', reason => {
  throw reason instanceof Error ? reason : Error(reason);
});

process.on('uncaughtException', err => {
  console.error(err);
  process.exit(1)
});
/*
process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
});
process.on('SIGINT', () => {
  console.info('SIGINT signal received.');
});
// */
