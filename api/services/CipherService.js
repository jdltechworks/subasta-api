var bcrypt = require('bcrypt-nodejs');

module.exports = {
  /**
   * Function to encrypt our password with bcrypt
   * @param  {string} password password
   * @return {string}          The hashed password
   */
  encryptPassword: function(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
  },

  comparePassword: function(password, user) {
    return bcrypt.compareSync(password, user.password)
  }
};