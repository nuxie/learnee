const bodyParser = require("body-parser");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const ejwt = require('express-jwt');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require('./routes/testAPI');
const signupRouter = require('./routes/signup');
const signinRouter = require('./routes/signin');
const logoutRouter = require('./routes/signout');
const tutorRouter = require('./routes/tutors');

const serverApp = express();

const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/User');

require('./auth/auth');

const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/learnee'

// view engine setup - not used
serverApp.set('views', path.join(__dirname, 'views'));
serverApp.set('view engine', 'pug');

serverApp.use(cors());
serverApp.use(logger('dev'));
serverApp.use(cookieParser());
serverApp.use(express.static(path.join(__dirname, 'public')));

serverApp.use(bodyParser.json()); // support json encoded bodies
// serverApp.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

serverApp.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
// serverApp.use(passport.initialize());
// serverApp.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

const secret = 'cQ79PaY0K/ScHa3cb7glfej3m7g1QdnKvzql8JUJox9cAYNzmTsgsox7AZ6SlgGy8EDIls4Zpw';
// serverApp.use(ejwt({secret: secret, algorithms: ['RS256'], userProperty: 'tokenPayload'}).unless({path: ['/signin']}));

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})
db.on('error', err => {
  console.error('connection error:', err)
})

serverApp.use('/', indexRouter);
serverApp.use('/users', usersRouter);
serverApp.use("/testAPI", testAPIRouter);
serverApp.use("/signup", signupRouter);
serverApp.use("/signin", signinRouter);
serverApp.use("/signout", logoutRouter);
serverApp.use("/tutors", tutorRouter);
secureRoute = require('./routes/profile');
serverApp.use("/profile", passport.authenticate('jwt', { session : false }), secureRoute)

// catch 404 and forward to error handler
serverApp.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
// will print stacktrace
if (serverApp.get('env') === 'development') {
  serverApp.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
serverApp.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

serverApp.listen(3000, () => {
  console.log('Server started')
});

module.exports = serverApp;
