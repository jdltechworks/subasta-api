/**
 * AuctionController
 *
 * @description :: Server-side logic for managing auctions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var path = require('path');

module.exports = {
	create: function(req, res, next) {
		if(req.file('image')) {
			req.file('image').upload({
				dirname: process.cwd() + '/assets/upload'
			}, (err, uploadedFiles) => {
				if(err) res.serverError(err);

				res.json({
					files: uploadedFiles
				});
			});
		}
	}
};