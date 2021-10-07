const express = require('express');
const debug = require('debug')('suppli_challenge:server');
const labelsRoute = require('./routes/api');
const rootRoute = require('./routes/root')

const PORT = process.env.PORT || 5000;
const app = express();

require('dotenv').config();

app.set('view engine', 'ejs');
// app.set('views', './client/public');

if (process.env.NODE_ENV === 'LOCAL') {
  app.use('/', express.static('./client/public'));
}

app.use('/api', labelsRoute);
app.use('/', rootRoute);


app.shutdown = function() {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  process.exit(1);
};

process.on('SIGINT', function () {
  app.shutdown();
});

process.on('SIGTERM', function () {
  app.shutdown();
});

app.listen(PORT, () => {
  debug('Local server is running on port', PORT);
});