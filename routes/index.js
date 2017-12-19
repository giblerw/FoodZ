const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.session.userId);
  res.render('login', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  const userId = req.session.userId;
//if not logged in..
  if(!userId) return res.redirect('/');
//otherwise, get user
  queries.getUserById(userId)
    .then(function(user) {
      // console.log(user);
      if(!user) return res.redirect('/');

      res.render('dashboard', {user});
    })
    
});

module.exports = router;
