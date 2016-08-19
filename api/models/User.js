/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	username: {
  		type: 'string',
  		required: true,
      lowercase: true
  	},
  	email: {
  		type: 'string',
  		unique: true,
  		required: true,
      email: true
  	},
  	password: {
  		type: 'string',
  		required: true
  	},
    //Add references to user
    auctions: {
      collection: 'auction',
      via: 'u_id'
    },
    profile: {
      collection: 'profile',
      via: 'u_id'
    },
  	toJSON: function() {
  		var obj = this.toObject();
  		delete obj.password;
  		return obj;
  	}
  }
  
};

