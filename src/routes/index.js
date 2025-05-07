const express = require('express');
const logger = require('../logger');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.render('pages/home', {
      pageTitle: 'Home'
    });
  } catch (error) {
    logger.error('Error rendering homepage: %s', error.message, { stack: error.stack });
    res.render('pages/error', {
      error: error.message,
      pageTitle: 'Error'
    });
  }
});

module.exports = router; 