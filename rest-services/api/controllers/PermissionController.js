/**
 * PermissionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {

    create: async function (req, res) {
        let permissions = req.body;
        createdPermissions = [];
        for (permission of permissions) {
            let payload = APIUtil.getCreatePayload(permission);
            let createdPermission = await Permission.createEach(payload).fetch();
            createdPermissions.push(createdPermission[0]);
        }
        sails.log(`Created the permission(s) successfully: ${
            JSON.stringify(createdPermissions)
        }`);
        return res.json({permissions: createdPermissions});
    },

    get: async function (req, res) {
        let query = req.query;
        let permissions = await Permission.find(query);
        sails.log(`Fetched all the permissions successfully: ${
            JSON.stringify(permissions)
        }`);
        return res.json({permissions: permissions});
    },

    getById: async function (req, res) {
        let id = req.param('id');
        let permission = await Permission.findOne({id});
        sails.log(`Fetched the permission details by ${id}: ${
            JSON.stringify(permission)
        }`);
        return res.json({permission: permission});
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.body;
        let updatedPermission = await Permission.updateOne({id}).set(payload);

        if (updatedPermission) {
            sails.log(`Updated the permission of id ${id} with ${
                JSON.stringify(payload)
            }`);
        } else {
            sails.log(`The database does not contain a permission having id ${id}.`);
        }

        return res.json({permission: updatedPermission});
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedPermission = await Permission.destroyOne({id})
        if (deletedPermission) {
            sails.log(`Deleted permission with id: ${id}.`);
        } else {
            sails.log(`The database does not have a permission with id: ${id}.`);
        }

        return res.json({permission: deletedPermission});
    },

    deleteMulti: async function (req, res) {
        let ids = req.body.ids;
        let deletedRecords = await Permission.destroy({
            id: {
                in: ids
            }
        }).fetch();

        if (deletedRecords) {
            sails.log(`All the permission recorts deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the permission records`);
        }

        return res.json({count: deletedRecords.length});
    }

};
