const express                 = require('express');
const router                  = express.Router();
const {   getAllUsers,
          createUser,
          updateUser,
          removeUser }        = require('../models/users.js');


router.get('/', getAllUsers, (req, res) => {
  res.json(res.user);
});

router.post('/', createUser, (req, res) => {
  res.json(res.user);
});

router.put('/:id', updateUser, (req, res) => {
  res.status 204
});

module.exports = router;
