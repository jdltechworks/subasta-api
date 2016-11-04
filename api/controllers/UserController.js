/** @module  Controller */

/**
 * @todo  email verification
 * @todo  actions for verified and error if user is not verified
 */

module.exports = {
  subscribe: function(req, res) {
    User.watch(req);
  }
};