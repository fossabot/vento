/**
 * Notification.js
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
    notes: {
      type: 'string',
      required: false,
      unique: false
    },
    definition: {
      type: 'string',
      required: true,
      unique: false
    }

  },

};

