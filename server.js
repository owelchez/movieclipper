var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var session = require('express-session');
var models = require('./models');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var LocalStrategy = require('passport-local').Strategy;


var db = require('./models/index.js').sequelize;
db.sync();
var User = require('./models').User;

var app = express(); // DUH!

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

//--------------------
//--------------------
// PASSPORT
//--------------------
//--------------------

/*passport.use('local', new LocalStrategy(
  function(username, password, done) {
    User.findOne( { where: { username: username} } ).then(function(user) {
      if (!user) {
        return done(null, false);
      }
      if (!user.username) {
        return done(null, false);
      }

      bcrypt.compare(password, user.password, function(err, result) {
        if (result) {
          return done(null, false);
        }
      })     

      return done(null, user);
    })
    .catch(function(err) {
      throw err;
    })
  }
));

passport.serializeUser(function(user, cb) {
  console.log("hi there",user.id)
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findOne( {where: {id: id} }).then(function(user) {
    cb(null, user);
  }).catch(function(err) {
    if (err) {
      return cb(err);
    }
  });
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
  secret: 'guru',
  store: new SequelizeStore({
    db: db
  }),
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());*/

/*******************************************************/

var answersIndex;
var newArray;

function findAnswers(value){
Post.findAll({
  where: {
    QuestionId: questionNumber
  }
});
}




app.get('/test', function(req, res){
  var newAnswer;
  models.Answer.findAll().then(function(answers){
    newAnswer = answers;
  }).then(function(){
    res.render('test', newAnswer);
    console.log(newAnswer);
  })
})





app.get('/', function(req, res) {
  var questionsArr;
  var answerArr;
  
  models.Question.findAll().then(function (questions){
    questionsArr = questions;
  }).then(function() {
    models.Answer.findAll().then(function (answer){
      answerArr = answer; // Everything working up to this point
      for(index = 0; index < questionsArr.length; index++){

      }

      /*This is the key to separate the answer, keep brainstorming*/
      /*models.Answer.findAll().then(function(answer){
        console.log(answer[0].text);
        console.log(answer[1].text);
        console.log(answer[2].text);
        console.log(answer[3].text);
      })*/

      var data = {
        questions: questionsArr,
        answers: answer
      }
      
      res.render('home', data);
      console.log(data);
    })
  });
})

/*app.get('/', function(req, res) 
  if (req.user) {
    res.render('home', { name: req.user.username});
  } else {
    res.redirect('/login');
  }
})*/


/*app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/error'}));
*/


var PORT = 3000;
app.listen(PORT);
console.log('Hackin\' n Slacking on PORT ' + PORT);