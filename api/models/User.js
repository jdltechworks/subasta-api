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
    products: {
      collection: 'product',
      via: 'u_id'
    },
    activated: {
      type: 'boolean',
      defaultsTo: false
    },
    profile: {
      collection: 'profile',
      via: 'u_id'
    },
    comment: {
      collection: 'comment',
      via: 'u_id'
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  beforeCreate: function(values, next) {
    
    values.password = CipherService.encryptPassword(values.password); 
    
    next();
  },
  afterCreate: function(values, next) {
    
    var email = values.email;
    var u_id = values.id;
    CipherService
      .generateActivationToken()
      .then((token) => {
        Token.create({u_id, token}).then((_res) => {
          let token = _res.token;
          EmailService.sendUserVerification(email, token);
        });
      });
    
    next();
  
  }
};