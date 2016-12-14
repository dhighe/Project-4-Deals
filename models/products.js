const db = require('../lib/dbconnect.js');

function getAllproducts(req, res, next) {
  db.any(`SELECT * FROM products;`)
  .then(data => {
    res.database = data;
    next();
  })
  .catch(err => next(err));
}

function getSingleProduct(req, res, next) {
  db.one(`SELECT * FROM products WHERE products_id = $1;`,req.params.products_id)
  .then(data => {
    res.database = data;
    next();
  })
  .catch(err => next(err));
}

function getSelectedProdcuts(req, res, next) {
  db.any(`SELECT * FROM products WHERE category=$1;`, req.params.category)
  .then(data => {
    res.database = data;
    next();
  })
  .catch(err => next(err));
}

function sortProdcuts(req, res, next) {
  db.any(`SELECT * FROM products SORT PRICE ORDER DECS;`)
  .then(data => {
    res.database = data;
    next();
  })
  .catch(err => next(err));
}


module.exports = {
  getAllproducts,
  getSingleProduct,
  getSelectedProdcuts,
  sortProdcuts,
};
