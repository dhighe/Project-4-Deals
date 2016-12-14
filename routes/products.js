const express = require('express');
const router = express.Router();
const { findProducts } = require('../services/ebay.js');

router.get('/', findProducts, (req, res) => {
    res.json(res.products);
  });

module.exports = router;
