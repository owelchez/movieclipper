var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var sequelize_cli = require('sequelize-cli');

var app = express(); // DUH!

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));














/*var PORT = 3000;
app.listen(PORT);
console.log('Hackin\' n Slacking on PORT ' + PORT);*/