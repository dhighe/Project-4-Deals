const fetch = require('node-fetch');
const API_URL = 'https://svcs.ebay.com/services/search/FindingService/v1';
const API_KEY = process.env.API_KEY;

function findProducts(req, res, next) {
  // console.log(req.query.search)
  const eBay_API = (`${API_URL}?SECURITY-APPNAME=${API_KEY}&OPERATION-NAME=findItemsByKeywords&callback=_cb_findItemsByKeywords&keywords=computer&paginationInput.entriesPerPage=15&GLOBAL-ID=EBAY-US&siteid=0`)
  fetch(eBay_API)
  .then(r => r.json())
  .then((data) => {
    // res.products = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}


module.exports = {
  findProducts
};
