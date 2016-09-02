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
	sendVerification: function(email, next) {
		var mailElements = {
			to: email,
			from: 'no-reply@subasta.com',
			subject: 'no-subject',
			html: '<h2>Hello world</h2>'
		}

		mailer.sendMail(mailElements, function(err, response) {
			if(err) {
				console.log(err);
			}
		});
	}
}