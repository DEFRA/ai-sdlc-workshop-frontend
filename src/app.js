const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const logger = require('./logger');

const app = express();
const port = process.env.PORT || 3000;

// Set up Nunjucks
const viewPaths = [
  path.join(__dirname, 'views'),
  path.join(__dirname, '../node_modules/govuk-frontend/dist')
];

nunjucks.configure(viewPaths, {
  autoescape: true,
  express: app
});

app.set('view engine', 'njk');

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/govuk/assets', express.static(path.join(__dirname, '../node_modules/govuk-frontend/dist/govuk/assets')));
app.use('/govuk', express.static(path.join(__dirname, '../node_modules/govuk-frontend/dist/govuk')));

// Parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Configure routes
const healthRouter = require('./routes/health');
app.use('/', healthRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error: %s', err.message, { stack: err.stack });
  res.status(500).render('pages/error', { error: 'Internal Server Error', pageTitle: 'Error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; 