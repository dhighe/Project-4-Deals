const fetch = require('node-fetch');
const API_URL = 'https://svcs.ebay.com/services/search/FindingService/v1?';
const API_KEY = process.env.API_KEY;

function findProducts(req, res, next) {
  fetch(`${API_URL}SECURITY-APPNAME=${API_KEY}&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=${req.params.search}&paginationInput.entriesPerPage=15&GLOBAL-ID=EBAY-US&siteid=0`)
  .then(r => r.json())
  .then((data) => {
    res.products = data;
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

