/**
 * RolePermissionMapController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {

    create: async function (req, res) {
        let rolePermissionMaps = req.param('rolePermissionMaps');
        let payload = APIUtil.getCreatePayload(rolePermissionMaps);
        let createdRolePermissionMaps = await RolePermissionMap.createEach(payload).fetch();
        sails.log(`Created the rolePermissionMap(s) successfully: ${JSON.stringify(createdRolePermissionMaps)}`);
        return res.json({ rolePermissionMaps: createdRolePermissionMaps });
    },

    get: async function (req, res) {
        let query = req.query;
        let rolePermissionMaps = await RolePermissionMap.find(query);
        sails.log(`Fetched all the rolePermissionMaps successfully: ${JSON.stringify(rolePermissionMaps)}`);
        return res.json({ rolePermissionMaps: rolePermissionMaps });
    },

    getById: async function (req, res) {
        let id = req.param('id');
        let rolePermissionMap = await RolePermissionMap.findOne({ id: id });
        sails.log(`Fetched the rolePermissionMap details by ${id}: ${JSON.stringify(rolePermissionMap)}`);
        return res.json({ rolePermissionMap: rolePermissionMap });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.param('rolePermissionMap');
        let updatedRolePermissionMap = await RolePermissionMap.updateOne({ id: id })
            .set(payload);

        if (updatedRolePermissionMap) {
            sails.log(`Updated the rolePermissionMap of id ${id} with ${JSON.stringify(payload)}`);
        }
        else {
            sails.log(`The database does not contain a rolePermissionMap having id ${id}.`);
        }

        return res.json({ rolePermissionMap: updatedRolePermissionMap });
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedRolePermissionMap = await RolePermissionMap.destroyOne({id: id});
        if (deletedRolePermissionMap) {
            sails.log(`Deleted RolePermissionMap with id: ${id}.`);
        } else {
            sails.log(`The database does not have a RolePermissionMap with id: ${id}.`);
        }

        return res.json({ rolePermissionMap: deletedRolePermissionMap });
    },

    deleteMulti: async function (req, res) {
        let ids = req.param('ids');
        let deletedRecords = await RolePermissionMap.destroy({
            id: { in: ids }
        }).fetch();
        
        if (deletedRecords) {
            sails.log(`All the rolePermissionMap recorts deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the rolePermissionMap records`);
        }
        
        return res.json({ count: deletedRecords.length });
    }

};

