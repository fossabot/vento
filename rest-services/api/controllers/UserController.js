/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 
const APIUtil = require('../utils/APIUtil');
const email = require('../services/email');

module.exports = {
  
    create: async function(req, res) {
        let users = req.body;
        createdUsers = [];
        for (let user of users) {
            let password = user['password'];
            //let updatedPayload = APIUtil.addUUID(payload);
            let payload = APIUtil.getCreatePayload(user);
            let createdUser = await User.createEach(payload).fetch();
            sails.log(`Created the user successfully: ${JSON.stringify(user)}`);
            let emailPayload = APIUtil.createEmailPayload(
                createdUser['email'], 
                `${createdUser['first_name']}, your account has been created.`,
                `Your username is, <b>${createdUser['username']}</b> and password is, <b>${password}</b>. Please login and complete your profile from here`);
            sails.log(emailPayload);
            email.sendEmail(emailPayload);
            createdUsers.push((APIUtil.omit('password', createdUser))[0])
        }
        sails.log(`Created the User(s) successfully: ${JSON.stringify(createdUsers)}`);
        return res.json({ users: createdUsers });
    },

    get: async function (req, res) {
        let query = req.query;
        let user = await User.find(query);
        sails.log(`Fetched all the user successfully: ${JSON.stringify(user)}`);
        return res.json({ users: user });
    },

    getById: async function (req, res) {
        let id = req.param('id');
        let user = await User.findOne({ id });
        sails.log(`Fetched the user details by ${id}: ${JSON.stringify(user)}`);
        return res.json({ user: user });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.body;
        let updatedUser = await User.updateOne({ id }).set(payload);

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
        let deletedUser = await User.destroyOne({ id })
        if (deletedUser) {
            sails.log(`Deleted user with id: ${id}.`);
        } else {
            sails.log(`The database does not have a user with id: ${id}.`);
        }

        return res.json({ user: deletedUser });
    },

    deleteMulti: async function (req, res) {
        let ids = req.body.ids;
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

