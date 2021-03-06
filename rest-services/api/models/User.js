/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    id: {
      type: 'string',
      required: true,
      unique: true
    },
  
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    first_name: {
      type: 'string',
      required: true
    },
    middle_name: {
      type: 'string',
      required: false
    },
    last_name: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: false
    },
    role_id: {
      type: 'string',
      required: true
    },
    product_id: {
      type: 'string',
      required: true
    },
    dept_id: {
      type: 'string',
      required: true
    },
    assets_consumed:{
      collection:'assetconsumermap',
      via: 'consumer_id'
    },
    assets_owned:{
      collection: 'asset',
      via: 'owner_id'
    }
  },
  customToJSON: function () {
    const { ['password']: omitted, ...rest } = this;
    return rest;
  },
  beforeCreate: function (user, cb) {
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) {
        return cb(err);
      }
      user.password = hash;
      return cb();
    });
  },
  beforeUpdate: function (user, cb) {
    if (user.password) {
      bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
          return cb(err);
        }
        user.password = hash;
        return cb();
      });
    }
    return cb();
  }
};
