/**
 * NotificationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function(req, res) {


        let notifs = req.body;
        createdNotifs = [];

        for (let notif of notifs)
        {
            let payload = APIUtil.getCreatePayload(notif);
            let createdNotif = await Notification.createEach(payload).fetch();
            createdNotifs.push(createdNotif[0]);
        }

        sails.log(`Created the notification(s) successfully: ${JSON.stringify(createdNotifs)}`);
        return res.json({ notifications: createdNotifs });
     

    },

    get: async function (req, res) {
        let query = req.query;
        let notification = await Notification.find(query);
        sails.log(`Fetched all the notification successfully: ${JSON.stringify(notification)}`);
        return res.json({ notifications: notification });
    },

    getById: async function (req, res) {
        let id = req.param('id');
        let notification = await Notification.findOne({ id });
        sails.log(`Fetched the Notification details by ${id}: ${JSON.stringify(notification)}`);
        return res.json({ notification: notification });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.body;
        let updatedNotification = await Notification.updateOne({ id }).set(payload);

        if (updatedNotification) {
            sails.log(`Updated the notification of id ${id} with ${JSON.stringify(payload)}`);
        }
        else {
            sails.log(`The database does not contain a notification having id ${id}.`);
        }

        return res.json({ notification: updatedNotification });
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedNotification = await Notification.destroyOne({ id })
        if (deletedNotification) {
            sails.log(`Deleted notification with id: ${id}.`);
        } else {
            sails.log(`The database does not have a notification with id: ${id}.`);
        }

        return res.json({ notification: deletedNotification });
    }
};

