/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 
const APIUtil = require('../utils/APIUtil');

module.exports = {
  
    create: async function(req, res) {
        let payload = req.param('user');
        let updatedPayload = APIUtil.addUUID(payload);
        let user = await User.create(updatedPayload).fetch();
        sails.log(`Created the user successfully: ${JSON.stringify(user)}`);
        return res.json({ user: APIUtil.omit('password', user) });
    },

    get: async function (req, res) {
        let query = req.query;
        let user = await User.find(query);
        sails.log(`Fetched all the user successfully: ${JSON.stringify(user)}`);
        return res.json({ users: user });
    },

    getById: async function (req, res) {
        let id = req.param('id');
        let user = await User.findOne({ id: id });
        sails.log(`Fetched the user details by ${id}: ${JSON.stringify(user)}`);
        return res.json({ user: user });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.param('user');
        let updatedUser = await User.updateOne({ id: id })
            .set(payload);

        if (updatedUser) {
            sails.log(`Updated the user of id ${id} with ${JSON.stringify(payload)}`);
        }
        else {
            sails.log(`The database does not contain a user having id ${id}.`);
        }

        return res.json({ user: updatedUser });
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedUser = await User.destroyOne({id: id})
        if (deletedUser) {
            sails.log(`Deleted user with id: ${id}.`);
        } else {
            sails.log(`The database does not have a user with id: ${id}.`);
        }

        return res.json({ user: deletedUser });
    },

    deleteMulti: async function (req, res) {
        let ids = req.param('ids');
        let deletedRecords = await User.destroy({
            id: { in: ids }
        }).fetch();
        
        if (deletedRecords) {
            sails.log(`All the user recorts deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the user records`);
        }
        
        return res.json({ count: deletedRecords.length });
    }
};

