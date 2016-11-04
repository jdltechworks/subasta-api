/**
 * @module  Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
  	name: {
  		type: 'string',
  		required: true,
  		unique: true
  	},
    quantity: {
      type: 'integer',
      defaultsTo: 0
    },
  	description: {
  		type: 'text'
  	},
  	verified: {
  		type: 'boolean',
      defaultsTo: false
  	},
    likes: {
      type: 'integer',
      defaultsTo: 0 
    },
  	u_id: {
  		model: 'user'
  	},
    comments: {
      collection: 'comment',
      via: 'p_id'
    },
    images: {
      collection: 'upload',
      via: 'p_id'
    },
    price: {
      type: 'float'
    }
  },
  beforeCreate: function(values, cb) {
    values.slug = _.kebabCase(values.name);
    cb();
  },
  afterCreate: function(values, cb) {
    Product.find({
      limit: 5,
      sort: 'createdAt DESC'
    }).exec(function(err, products) {
      sails.sockets.broadcast('productFeeds', 'feeds', products);
    });
    cb();
  }
};