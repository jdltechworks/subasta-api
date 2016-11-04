var passport = require('passport');

module.exports = function(sails) {
  return {
    routes: {
      before:  {
        'POST /signup': function(req, res, next) {
          User.create(req.body).then((user) => {
            return {
              token: CipherService.createJwtToken(user),
              user: user
            };
          })
          .then(res.created)
          .catch(res.serverError);
        },
        'POST /auth': function(req, res) {
          passport.authenticate('local', function(err, user, info) {

            res.json({
              token: CipherService.createJwtToken(user),
              user
            })
          })(req, res);
        }
      },
      after: {
        'POST /signin': function(req, res, next) {
          next();
        }
      },
      'POST /auth': function(req, res, next) {
        console.log(req.body);
        next();
      }
    }
  }
};