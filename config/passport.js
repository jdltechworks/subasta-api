var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


var jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: 'amRsdGVjaHdvcmtz',
  issuer: 'accounts.jdltechworks.com',
  audience: 'jdltechworks.com',
  passReqToCallback: false,
  algorithms: ['HS256', 'HS384']
};

var localOpts = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: false
};

passport.use(new LocalStrategy(localOpts, function(email, password, next) {
  User.findOne({email}).then((user, error) => {
    if(user) {
      if(CipherService.comparePassword(password, user)) {
        return next(null, user, {});
      } else {
        return next(null, false, {
          code: 'E_WRONG_PASSWORD',
          message: 'Password is wrong'
        });
      }
    }
  });
}));

passport.use(new JwtStrategy(jwtOpts, function(jwtPayload, next) {
  var user = jwtPayload.user;
  return next(null, user, {});
}));

module.exports.jwtSettings = jwtOpts;