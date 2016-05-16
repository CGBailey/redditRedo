var express = require('express');
var router = express.Router();
const valid = require('../validate/');
const knex = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/signup', valid.register, function(req, res, next) {
  const user = req.body.user;
  const username = user.username;
  const email = user.email;
  const password_hash = bcrypt.hashSync(user.password, 10);

  knex('users')
    .whereRaw('lower(email) = ?', user.email.toLowerCase())
    .count()
    .first()
    .then(function (result) {
      if (result.count == "0") {
        knex('users').insert({username, email, password_hash})
        .returning('*')
        .then(function(users){
          const regUser = users[0];
          const token = jwt.sign({ id: regUser.id }, process.env.JWT_SECRET )

          res.json({
            id: regUser.id,
            email: email,
            username: username,
            token: token
          })
        })
      } else {
        res.status(422).json({
          errors: ["Email has already been taken"]
        })
      }
    })



});

module.exports = router;
