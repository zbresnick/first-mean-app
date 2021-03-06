var passport = require('passport');

exports.authenticate = function(req, res, next) {
  var auth = passport.authenticate('local', function(err, user) {
    if(err) return next(err);
    if(!user) res.send({success:false});
    req.logIn(user, function(err) {
      if(err) return next(err);
      res.send({sucess:true});
    });
  });
  auth(req, res, next);
}
