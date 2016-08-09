/** @module  Controller */

module.exports = {
	/**
	 * Overridden User create
	 * 
	 * @param  {object}   req  Requested objects from the client side
	 * @param  {object}   res  Response to be sent to the client
	 * @param  {function} next Call back
	 * 
	 */
	create: function(req, res, next) {
		User.create(req.body)
			.then(function(response){
				res.json({email: response.email});
				emailService.sendVerification(response);
			})
			.then(res.created)
			.catch(function(error) {
				res.json(error);
			});
	}

 };