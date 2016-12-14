const express                 = require('express');
const router                  = express.Router();
const {  getAllproducts,
         getSingleProduct,
         getSelectedProdcuts,
         sortProdcuts }     = require('../models/products.js');

router.get('/', getAllproducts, (req, res) => {
    res.json(res.database);
  });

router.get('/:category', getSelectedProdcuts, (req, res) => {
    res.json(res.database);
  });

module.exports = router;
