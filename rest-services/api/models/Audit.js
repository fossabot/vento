/**
 * Audit.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      required: true,
      unique: true
    },
    type: {
      type: 'string',
      required: true,
      unique: false
    },
    message: {
      type: 'string',
      required: true,
      unique: false
    },
    severity: {
      type: 'string',
      required: true,
      unique: false
    }
  }
};

