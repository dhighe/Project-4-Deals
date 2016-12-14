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

function createUser(req, res, next) {x
  db.none(`INSERT INTO users (f_name, l_name, username, email, password, phonenumber) VALUES ($1, $2, $3, $4, $5, $6)`,
          [req.query.f_name, req.query.l_name, req.query.username, req.query.email, req.query.password, req.query.phonenumber, req.query.user_id])
  .then(data => next())
  .catch(err => next(err));
}

function updateUser(req, res, next) {
  db.result(`UPDATE users SET f_name = $1 l_name = $2 username = $3 email = $4 password = $5 phonenumber = $6
             WHERE user_id = $7`, [req.query.f_name, req.query.l_name, req.query.username, req.query.email, req.query.password, req.query.phonenumber, req.query.user_id])
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
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
};
