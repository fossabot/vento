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
          role_id: {         
          required: true,
            unique: true,
            model:'role'
          },
          permission_id: {
            required: true,
            unique: true,
            model:'permission'
          }
          
            },
          
          };
    