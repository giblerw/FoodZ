const express = require('express');
const router = express.Router();
const knex = require('../db/connection');
const db = require('../db/queries');
const url = "http://www.recipepuppy.com/api/"
const request = require('request');
const bodyParser = require('body-parser');

router.get('/0', function(req, res) {
  var page = Math.floor((Math.random() * 100))
  var uri = url + '?p=' + page;
  request(uri, function(error, response, body) {
    var food = JSON.parse(body)
    res.render('allRecipes', {food})
  });
});

router.get('/search', (req, res) => {
  res.redirect(req.get('referer'));
})

router.post('/search', function(req, res) {
  var longSearch = req.body.ingredients;
  var searchArr = longSearch.split(' ');
  var letterSearch = longSearch.split('');
  var foodSearch = req.body.type;

//If the search is blank
  if (letterSearch.length === 0 && foodSearch.length === 0){
      res.redirect('/recipes/0')
//one ingredient, no type
} else if (letterSearch.length >= 2 && searchArr.length === 1 && foodSearch.length === 0) {
    var oneIngredient = searchArr[0]
      request(url + '?i=' + oneIngredient, (error, response, body) => {
        const food = JSON.parse(body)
        res.render('recipes', {food})
    })
//more than one ingredient, no type
} else if (searchArr.length > 1 && foodSearch.length === 0) {
    var searchString = searchArr.join();
    var uri = url + '?i=' + searchString
      request(uri, (error, response, body) => {
        const food = JSON.parse(body)
        res.render('recipes', {food})
      })
//no ingredient, one type
} else if (letterSearch.length === 0 && foodSearch.length > 0) {
    request(url + '?q=' + foodSearch, (error, response, body) => {
      const food = JSON.parse(body)
      res.render('recipes', {food})
    })
//oneIngredient, one type
} else if (letterSearch.length >= 2 && searchArr.length === 1 && foodSearch.length > 0) {
    var oneIngredient = searchArr[0]
    var keyword = foodSearch
    request(url + '?i=' + oneIngredient + '&q=' + keyword, (error, response, body) => {
      const food = JSON.parse(body)
      res.render('recipes', {food})
    })
//>1 ingredient, one type
} else { var searchString = searchArr.join();
         var keyword = foodSearch;
         var uri = url + '?i=' + searchString + '&q=' + keyword;
          request(uri, (error, response, body) => {
            const food = JSON.parse(body)
            res.render('recipes', {food})
          })
  }
});

module.exports = router;
