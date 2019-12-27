/**
 * SoftwareAsset.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      required: true
    },
    software: {
      type: 'string',
      required: true
    },
    version: {
      type: 'string',
      required: false
    },
    date_of_expiry: {
      type: 'number',
      required: false
    },
    notes: {
      type: 'string',
      required: false
    },
    consumer: {
      type: 'string',
      required: true,
      unique: false
    },
    owner: {
      type: 'string',
      required: true
    },
    department_id: {
      type: 'string',
      required: true
    },
    product_id: {
      type: 'string',
      required: true
    },
    notification_id: {
      type: 'string',
      required: false
    }
  },

};

