const express = require('express');
const path = require("path");
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const port = process.env.PORT || 3000;
const request = require('request');
const cookieSession = require('cookie-session');
const routes = require("./routes/index");
const recipes = require("./routes/recipes");
const users = require("./routes/users");
const key = process.env.COOKIE_KEY || 'keyboard cat'


const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('routes'));

app.use(cookieSession({
  name: 'session',
  keys: ['key'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use("/", routes);
app.use("/recipes", recipes);
app.use("/users", users);
// app.get('/list', function(req, res) {
//     request('http://www.recipepuppy.com/api/', function(error, response, body) {
//         const food = JSON.parse(body)
//         console.log(food.results);
//         res.render('recipes', {food})
//     });
// });

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error("Not Found");
//     err.status = 404;
//     next(err);
// });
app.listen(port, () => {
  console.log(`App listening on http://localhost:3000`);
})

module.exports = app;
