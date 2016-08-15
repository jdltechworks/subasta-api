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
  	image: {
  		type: 'string',
      defaultsTo: 'http://dummyimage.com/640x4:3'
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
    slug: {
      type: 'string',
    },
  	owner: {
  		model: 'user'
  	},
    comment: {
      collection: 'comment',
      via: 'a_id'
    },
  },
  beforeCreate: function(values, cb) {
    values.slug = _.kebabCase(values.title);
    cb();
  }
};