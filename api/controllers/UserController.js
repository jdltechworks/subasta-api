/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next) {
		User.create(req.body).then(function(response){
			res.json({email: response.email});
			emailService.sendVerification(response);
		}).catch(function(error) {
			res.json(error);
		});
	}
 };