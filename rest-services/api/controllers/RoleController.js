/**
 * RoleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function (req, res) {
        let roles = req.param('roles');
        let payload = APIUtil.getCreatePayload(roles);
        let createdRoles = await Role.createEach(payload).fetch();
        sails.log(`Created the role(s) successfully: ${JSON.stringify(createdRoles)}`);
        return res.json({ roles: createdRoles });
    },

    get: async function (req, res) {
        let query = req.query;
        let roles = await Role.find(query);
        sails.log(`Fetched all the roles successfully: ${JSON.stringify(roles)}`);
        return res.json({ roles: roles });
    },
    getById: async function (req, res) {
        let id = req.param('id');
        let role = await Role.findOne({ id: id });
        sails.log(`Fetched the role details by ${id}: ${JSON.stringify(role)}`);
        return res.json({ role: role });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.param('role');
        let updatedRole = await Role.updateOne({ id: id })
            .set(payload);

        if (updatedRole) {
            sails.log(`Updated the role of id ${id} with ${JSON.stringify(payload)}`);
        }
        else {
            sails.log(`The database does not contain a role having id ${id}.`);
        }

        return res.json({ role: updatedRole });
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedRole = await Role.destroyOne({id: id})
        if (deletedRole) {
            sails.log(`Deleted role with id: ${id}.`);
        } else {
            sails.log(`The database does not have a role with id: ${id}.`);
        }

        return res.json({ role: deletedRole });
    },

    deleteMulti: async function (req, res) {
        let ids = req.param('ids');
        let deletedRecords = await Role.destroy({
            id: { in: ids }
        }).fetch();
        
        if (deletedRecords) {
            sails.log(`All the role recorts deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the role records`);
        }
        
        return res.json({ count: deletedRecords.length });
    }
};

