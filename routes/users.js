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

  router.post('/login', valid.login, function(req, res, next) {

    const user = req.body.user;
    const email = user.email;
    const password = user.password;
    knex('users')
      .whereRaw('lower(email) = ?', user.email.toLowerCase())
      .first()
      .then(function (result) {
        console.log(result.password_hash)
        console.log(password);
        if (!result) {
          res.status(422).json({
            error: "Invalid password or email"
          })
        }
        else if(!bcrypt.compareSync(password, result.password_hash)) {
            res.status(422).send({ error: 'Invalid password or email' });
        }
        else {
          const token = jwt.sign({ id: result.id }, process.env.JWT_SECRET )

          res.json({
            id: result.id,
            email: email,
            username: result.username,
            token: token
          })
        }
      })


});

module.exports = router;
