var express = require('express'),
  mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

app.get('/partials/*', function(req, res) {
  res.render('../../public/app/' + req.params[0]);
});

app.get('*', function(req, res) {
  res.render('index');
});

var port = process.env.PORT ||  3030;
app.listen(config.port);
console.log('listening on port ' + config.port + '...')
