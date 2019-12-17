/**
 * RolePermissionMap.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    role_id: {
      type: 'string',
      required: true,
      unique: true
    },
    permission_id: {
      type: 'string',
      required: true,
      unique: true
    }
    
  },

};

