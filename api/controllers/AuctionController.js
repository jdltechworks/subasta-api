/**
 * AuctionController
 *
 * @description :: Server-side logic for managing auctions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var path = require('path');

module.exports = {
	create: function(req, res, next) {
		Auction.create(req.body).then((json) => {
			var images = req.body.images.split(',');
			for(var i in images) {
				Upload.create({a_id: json.id, file: images[i]}).then((response) => {
				});
			}
		});
	}
};