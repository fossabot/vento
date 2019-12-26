/**
 * HardwareAsset.js
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
    asset_id: {
      type: 'string',
      required: true,
      unique: true
    },
    location: {
      type: 'string',
      required: true,
      unique: false
    },
    type: {
      type: 'string',
      required: true,
      unique: false
    },
    ip: {
      type: 'string',
      required: true,
      unique: true
    },
    server_tag: {
      type: 'string',
      required: true,
      unique: false
    },
    resource_details: {
      type: 'string',
      required: true,
      unique: false
    },
    contract_end_date: {
      type: 'number',
      required: true,
      unique: false
    },
    owner: {
      type: 'string',
      required: true,
      unique: false
    },
    consumer: {
      type: 'string',
      required: true,
      unique: false
    },
    state: {
      type: 'boolean',
      required: true,
      unique: false
    },
    os_version: {
      type: 'string',
      required: true,
      unique: false
    },
    os_patch: {
      type: 'string',
      required: false,
      unique: false
    },
    notes: {
      type: 'string',
      required: false,
      unique: false
    },
    product_id: {
      type: 'string',
      required: true,
      unique: false
    },
    department_id: {
      type: 'string',
      required: true,
      unique: false
    },
    notification_id: {
      type: 'string',
      required: true,
      unique: true
    }


  },

};

