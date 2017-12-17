const express = require('express');
const router = express.Router();
const knex = require('../db/connection');
const db = require('../db/queries');
const url = "http://www.recipepuppy.com/api"
const request = require('request');
const bodyParser = require('body-parser');
var http = require('http')


router.get('/0', function(req, res) {
    request('http://www.recipepuppy.com/api/', function(error, response, body) {
        const food = JSON.parse(body)
        console.log(food.results);
        res.render('recipes', {food})
    });
});


module.exports = router;
