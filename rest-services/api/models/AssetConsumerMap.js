/**
 * RolePermissionMap.js
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
      required: true,
      model:'asset'
    },
    consumer_id: {
      required: true,
      model:'user'
    }
  }
};
