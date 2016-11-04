var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');



module.exports = {
  /**
   * Function to encrypt our password with bcrypt
   * @param  {string} password password
   * @return {string}          The hashed password
   */
  secretOrKey: sails.config.jwtSettings.secretOrKey,
  issuer: sails.config.jwtSettings.issuer,
  audience: sails.config.jwtSettings.audience,
  generateActivationToken: function() {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(36, function(err, buffer) {
        resolve(buffer.toString('hex'));
      });
    });
    
  },
  createJwtToken: function(user) {
    return jwt.sign({
      user: user.toJSON()
    },
    this.secretOrKey,
    {
      algorithm: sails.config.jwtSettings.algorithms[1],
      issuer: this.issuer,
      audience: this.audience
    });
  },
  encryptPassword: function(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
  },

  comparePassword: function(password, user) {
    return bcrypt.compareSync(password, user.password)
  }
};