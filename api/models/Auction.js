/**
 * @module  Auction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
  	title: {
  		type: 'string',
  		required: true,
  		unique: true
  	},
  	description: {
  		type: 'text'
  	},
  	verified: {
  		type: 'boolean'
  	},
  	sold: {
  		type: 'boolean',
  		defaultsTo: false
  	},
  	startDate: {
  		type: 'datetime'
  	},
  	endDate: {
  		type: 'datetime'
  	},
    likes: {
      type: 'integer',
      defaultsTo: 0 
    },
    minBid: {
      type: 'float'
    },
  	tags: {
  		type: 'array'
  	},
  	u_id: {
  		model: 'user'
  	},
    comments: {
      colletion: 'comment',
      via: 'a_id'
    },
    images: {
      collection: 'upload',
      via: 'a_id'
    }
  },
  beforeCreate: function(values, cb) {
    values.slug = _.kebabCase(values.title);
    cb();
  }
};