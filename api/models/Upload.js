/**
 * Upload.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	file: {
  		type: 'string'
  	},
  	u_id: {
  		model: 'user'
  	},
  	p_id: {
  		model: 'product'
  	},
    toJSON: function() {
      var uploads = sails.config.uploads;
      var obj = this.toObject();
      obj.file = `${uploads}/${obj.file}`;
      return obj;
    }
  }
};