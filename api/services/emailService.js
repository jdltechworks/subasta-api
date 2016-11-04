/** @module Mail Service*/

var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var fs = require('fs');


var mailer = nodemailer.createTransport(sgTransport(sails.config.mailer));


module.exports = {
	/**
	 * Send verification email to newly signed up user
	 * 
	 * @param  {object}   options user sign up details
	 * @param  {Function} done    [description]
	 * @return {object}           send mail to user
	 */
	sendUserVerification: function(email, token) {
		var mailElements = {
			to: email,
			from: 'no-reply@subasta.com',
			subject: 'no-subject',
			html: `<h1>Your token ${token}<h1>`
		}

		mailer.sendMail(mailElements, function(err, response) {
			if(err) {
				console.log(err);
			}
		});
	}
}