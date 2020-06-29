const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoute = require('./api/route/user');

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

app.use('/user', userRoute);

const connectionString = 'mongodb+srv://WebGroup1:csci5709g1@cluster0-lymd4.mongodb.net/tutorial6?retryWrites=true&w=majority'

mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true });

module.exports = app;