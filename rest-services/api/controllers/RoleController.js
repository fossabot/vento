/**
 * RoleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const CONSTANTS =  require('../../CONSTANTS');
const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function (req, res) {
        let roles = req.body;
        createdRoles = [];
        
        for (let role of roles) {
            var payload = APIUtil.getCreatePayload(role);
            let createdRole = await Role.createEach(payload).fetch();
            createdRoles.push(createdRole);
        }
        sails.log(`Created the Roles(s) successfully: ${JSON.stringify(createdRoles)}`);
        return res.json({ roles: createdRoles });
    },
    get: async function (req, res) {
        let query = req.query;
        sails.log(query);
        let roles = await Role.find({where: query,select:['display_name','description']});
        sails.log(`Fetched all Roles(s) successfully: ${JSON.stringify(roles)}`);
        return res.json({ roles: roles });
    },
    getById: async function (req, res) {
        let id = req.param('id');
        let role = await Role.findOne({ id }).populate(CONSTANTS.modelNames.PERMISSIONS);
        role.permissionNames = [];
        for(let permission of role.permissions){
            var permissionRecord = await Permission.findOne({where:{id: permission.permission_id},select: ['display_name']});
            role.permissionNames.push(permissionRecord.display_name);
        }
        sails.log(`Fetched the Role details by ${id}: ${JSON.stringify(role)}`);
        return res.json({ role: role });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.body;
        let updatedRole = await Role.updateOne({ id }).set(payload);
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
        let deletedRole = await Role.destroyOne({ id })
        if (deletedRole) {
            sails.log(`Deleted role with id: ${id}.`);
        } else {
            sails.log(`The database does not have a role with id: ${id}.`);
        }

        return res.json({ role: deletedRole });
    },

    deleteMulti: async function (req, res) {
        let payload = req.body;
        let deletedRecords = await Role.destroy({
            id: { in: payload.ids }
        }).fetch();
        
        if (deletedRecords) {
            sails.log(`All the role recorts deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the role records`);
        }
        
        return res.json({ count: deletedRecords.length });
    }
};

