const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

var app = express();

mongoose.connect('');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParsere.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var index = require('./routes/index');
var drawingsRouter = require('./routes/drawings');


app.use('/', index);
app.use('/drawings', drawingsRouter);

app.use(function(req, res, next) {
  var err = new Error('ERROR BITCH. SUCK A DICK!');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {

res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
res.status(err.status || 500);
res.render('error');

});

module.exports = app;



app.listen(3000, () => {
  console.log("The app is running on Port 3000 BITCH!");
});
