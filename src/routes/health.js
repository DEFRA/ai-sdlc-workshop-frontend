const express = require('express');
const fetch = require('node-fetch');
const logger = require('../logger');

const router = express.Router();
const API_BASE_URL = 'http://localhost:8000';

router.get('/', async (req, res) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/health`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    res.render('pages/health', {
      health: data,
      pageTitle: 'API Health'
    });
  } catch (error) {
    logger.error('Error fetching health status: %s', error.message, { stack: error.stack });
    res.render('pages/error', {
      error: error.message,
      pageTitle: 'Error'
    });
  }
});

module.exports = router; 