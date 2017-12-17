const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // fetch(url)
  //   .then(function(response) {
  //     return response.json()
  res.render('index');
});

module.exports = router;
