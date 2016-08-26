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

passport.use('local', new LocalStrategy(
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
app.use(passport.session());

/*******************************************************/

app.get('/', function(req, res){
  console.log(res);
  var questions = req.params.text;

  models.Store.findAll({where: { questions: text} })
  .then(function(answers){
    return answers.getAnswers()
    })
})


/*app.get('/', function(req, res) {
  if (req.user) {
    res.render('home', { name: req.user.username});
  } else {
    res.redirect('/login');
  }
})*/

app.get('/', function(req, res) {
  res.render('home');
})

/*app.get('/login', function(req, res) {
  res.render('login');
})

app.get('/error', function(req, res) {
  res.render('error');
})*/

/*app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/error'}));
*/


var PORT = 3000;
app.listen(PORT);
console.log('Hackin\' n Slacking on PORT ' + PORT);


// Fake Schema

// Questions
//   1  | "when was ben hur made"
// id | query |

// Answers
// 1  | "1974"  | false
// 2  | "1977"  | true
// id | info  | status  |


// QuestionAnswers
// 
// qID    | aID   
  // 1    | 1
  // 1    | 2


  // UserAnswers
  // uID| aID
  // 1| 2

/*var q1 = Questions.getOne({where:{id: 1}})
  q1.getAnswers({where:{status: true}})
  q1.getAnswers();*/