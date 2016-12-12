const db = require('../db/dbconnect.js');

function getAllUsers(req, res, next) {
  db.any(`SELECT * FROM users;`)
  .then(data => {
    res.user = data;
    next();
  })
  .catch(err => next(err));
}

function getSingleUser(req, res, next) {
  db.any(`SELECT * FROM users WHERE user_id = $1;`,[req.params.user_id])
  .then(data => {
    res.user = data;
    next();
  })
  .catch(err => next(err));
}

function createUser(req, res, next) {
  console.log('req.body: ', req.body)
  db.none(`INSERT INTO users (f_name, l_name, username, email, password, phonenumber)
           VALUES ( $/f_name/, $/l_name/, $/username/, $/email/, $/password/, $/phonenumber/);`)
  .then(data => {
    res.user = data;
    next();
  })
  .catch(err => next(err));
}


function updateUser(req, res, next) {
  db.result(`UPDATE users SET f_name = $1 l_name = $2 username = $3 email = $4 password = $5 phonenumber = $6
             WHERE user_id = $7`, [req.params.f_name, req.params.l_name, req.params.username, req.params.email, req.params.password, req.params.phonenumber, req.params.user_id])
  .then(data => {
    // returns null
    res.user = data;
    next();
  })
  .catch(err => next(err));
}

function removeUser(req, res, next) {
  console.log('HIT ***')
  db.result(`DELETE FROM users WHERE user_id = $1`, [req.params.user_id] )
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
