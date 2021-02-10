const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dbConfig = require('./config/dbConnect');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

mongoose.connect(dbConfig.URI, {
        dbName: dbConfig.Data_Base_Name,
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Connected to mongo')
    })
    .catch((err) => {
        console.log('Could not connect to Mongo \n')
        if (err.name === 'MongoNetworkError') {
            console.log('Make sure IP is whitelisted', err)
        } else {
            console.log(err)
        }
    });

mongoose.set('useCreateIndex', true);

/**
 * Set routes. 
 * Note: Routes must be set AFTER settings all express configurations.
 */
require('./routes')(app);

module.exports = app;