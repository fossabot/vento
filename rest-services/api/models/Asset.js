/**
 * Asset.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    hardware_asset_id: {
      type: 'string',
      required: false
    },
    hardware_location: {
      type: 'string',
      required: false
    },
    hardware_type: {
      type: 'string',
      required: false
    },
    hardware_ip: {
      type: 'string',
      required: false
    },
    hardware_server_tag: {
      type: 'string',
      required: false
    },
    hardware_resource_details: {
      type: 'string',
      required: false
    },
    hardware_state: {
      type: 'boolean',
      required: false
    },
    hardware_os_version: {
      type: 'string',
      required: false
    },
    hardware_os_patch: {
      type: 'string',
      required: false
    },
    software_name: {
      type: 'string',
      required: false
    },
    software_version: {
      type: 'string',
      required: false
    },
    asset_type: {
      type: 'string',
      isIn: ['Hardware', 'Software']
    },
    contract_end_date: {
      type: 'string',
      columnType: 'bigint',
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
    owner_id: {
      //type: 'string',
      required: true,
      unique: false,
      model: 'user'
    },
    consumers:{
      collection:'assetconsumermap',
      via: 'asset_id'
    },
    notifications:{
      collection : 'assetnotificationmap',
      via : 'asset_id'
    }
  }
  /*customToJSON: function() {
    var obj = this;
    obj['contract_end_date'] = parseInt(obj['contract_end_date']);
    return obj;
  }*/
};
