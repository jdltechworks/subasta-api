/**
 * FeedsController
 *
 * @description :: Server-side logic for managing feeds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  subscribe: function(req, res) {
    if(req.isSocket) {
      sails.sockets.join(req, 'productFeeds')
    }
    return res.ok();
  },

  feeds: function(req, res) {
    Product.find().exec(function() {
      Product.watch(req);
    });
    res.ok();
  }
};

