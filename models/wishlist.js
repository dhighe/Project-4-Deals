const db = require('../lib/dbconnect.js');

function getAllWishlists(req, res, next) {
  db.any(`SELECT * FROM wishlist;`)
  .then(data => {
    res.user = data;
    next();
  })
  .catch(err => next(err));
}

function getSingleWishlist(req, res, next) {
  db.any(`SELECT * FROM wishlist WHERE wishlist_id = $1;`,[req.params.wishlist_id])
  .then(data => {
    res.user = data;
    next();
  })
  .catch(err => next(err));
}

function addToWishlist(req, res, next) {
  db.none(`INSERT INTO wishlist (title, img, url, price)
           VALUES ( $/title/, $/img/, $/url/, $/price/);`)
  .then(data => {
    res.user = data;
    next();
  })
  .catch(err => next(err));
}

function updateWishlist(req, res, next) {
  db.result(`UPDATE wishlist SET title = $1 img = $2 url = $3 price = $4
             WHERE wishlist_id = $5`, [req.params.title, req.params.img, req.params.url, req.params.price, req.params.wishlist_id])
  .then(data => {
    // returns null
    res.user = data;
    next();
  })
  .catch(err => next(err));
}

function removeWishlist(req, res, next) {
  db.result(`DELETE FROM wishlist WHERE wishlist_id = $1`, [req.params.wishlist_id] )
  .then(data => {
    res.user = data;
    next();
  })
  .catch(err => next(err));
}

module.exports = {
  getPlaylist,
  saveOneSongToPlaylist,
  deleteOneSongFromPlaylist,
};
