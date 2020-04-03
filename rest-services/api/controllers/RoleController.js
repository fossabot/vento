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
        var payload = APIUtil.getCreatePayload(roles);
        let createdRoles = await Role.createEach(payload).fetch();
        if(payload[0].permissions){
            var permissions = payload[0].permissions;
            for(let permission of permissions){
                payloadData = {'role_id': payload[0].id,'permission_id': permission};
                let newPayload = APIUtil.getCreatePayload(payloadData);
                await RolePermissionMap.createEach(newPayload).fetch();
            }
        }
        return res.json({ roles: createdRoles });
    },
    get: async function (req, res) {
        let query = req.query;
        sails.log(query);
        let roles = await Role.find({where: query,select:['display_name','description']});
        
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
        return res.json({ role: role });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.body;
        sails.log(payload);
        var permissions=payload.permissions
        let updatedRole = await Role.updateOne({ id }).set(payload);
        if (updatedRole) {
            /*let del = await RolePermissionMap.destroyOne({role_id: id});
            sails.log(del);
            for(let permission of permissions){
                payloadData = {'role_id': id,'permission_id': permission};
                let newPayload = APIUtil.getCreatePayload(payloadData);
                await RolePermissionMap.createEach(newPayload).fetch();
            }*/
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

