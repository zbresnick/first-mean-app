var express = require('express'),
  mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

mongoose.connect(config.db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('first-mean-app database opened');
});


app.get('/partials/*', function(req, res) {
  res.render('../../public/app/' + req.params[0]);
});

app.get('*', function(req, res) {
  res.render('index');
});

var port = process.env.PORT ||  3030;
app.listen(config.port);
console.log('listening on port ' + config.port + '...')
