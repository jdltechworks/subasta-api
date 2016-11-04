/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  activate: function(req, res) {
    Token.findOne({token: req.body.token}).then((_res) => {
      User.update({id: _res.u_id}, { activated: true }).then((result) => {
        res.json(result);
      }).catch(err => console.log('error'));
    }).catch(err => res.serverError(err));
  }
};