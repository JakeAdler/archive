let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let indexRouter = require('./routes/index');
let saveRoute = require('./routes/API/save')
let app = express();
let cors = require('cors');
require('dotenv').config()


// Allow CORS
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/api/', saveRoute);




module.exports = app
