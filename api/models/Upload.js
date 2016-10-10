/**
 * Upload.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var path = require('path');
module.exports = {

  attributes: {
  	file: {
  		type: 'string'
  	},
  	u_id: {
  		model: 'user'
  	},
  	a_id: {
  		model: 'auction'
  	},
    toJSON: function() {
      var uploads = sails.config.uploads;
      var obj = this.toObject();
      obj.file = `${uploads}/${obj.file}`;
      console.log(obj.file);
      return obj;
    }
  }
};