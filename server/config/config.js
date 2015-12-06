var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/first-mean-app',
    port: process.env.PORT || 3030
  },
  production : {
    rootPath: rootPath,
    db: 'mongodb://zdb86:changeme1@ds055564.mongolab.com:55564/heroku_6kh52lv9',
    port: process.env.PORT || 80
  }
}
