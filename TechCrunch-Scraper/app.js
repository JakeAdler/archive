let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require("mongoose");
let hbs = require('express-handlebars')
let app = express();
let indexRouter = require('./routes/index');
let scrapeRouter = require('./routes/scrape');
let saveRouter = require('./routes/save');
let getSavedRouter = require('./routes/getSaved');
let commentRouter = require('./routes/comment');
require("dotenv").config();

// view engine setup
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

//connect to mognoose

//"mongodb://localhost:27017/tech-crunch-scraper"
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to mongoose");
  }
});

//set routes
app.use('/', indexRouter);
app.get('/scrape', scrapeRouter);
app.post('/save', saveRouter);
app.use('/getSaved', getSavedRouter);
app.post('/comment', commentRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;