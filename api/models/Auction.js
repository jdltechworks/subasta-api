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
  		type: 'text',
  		required: true
  	},
  	image: {
  		type: 'array'
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
  	owner: {
  		model: 'user'
  	},
    comment: {
      collection: 'comment',
      via: 'owner'
    }
  }
};