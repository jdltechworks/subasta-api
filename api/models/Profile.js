/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	u_id: {
  		model: 'user'
  	},
    organization: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    longitude: {
      type: 'float'
    },
    latitude: {
      type: 'float'
    }
  }
};

