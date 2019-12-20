/**
 * NotificationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function(req, res) {
        let payload = req.param('notification');
        let updatedPayload = APIUtil.addUUID(payload);
        let notification = await Notification.create(updatedPayload).fetch();
        sails.log(`Created the notification successfully: ${JSON.stringify(notification)}`);
        return res.json({ notification: notification });
    },

    get: async function (req, res) {
        let query = req.query;
        let notification = await Notification.find(query);
        sails.log(`Fetched all the notification successfully: ${JSON.stringify(notification)}`);
        return res.json({ notifications: notification });
    },

    getById: async function (req, res) {
        let id = req.param('id');
        let notification = await Notification.findOne({ id: id });
        sails.log(`Fetched the Notification details by ${id}: ${JSON.stringify(notification)}`);
        return res.json({ notification: notification });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.param('notification');
        let updatedNotification = await Notification.updateOne({ id: id })
            .set(payload);

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
        let deletedNotification = await Notification.destroyOne({id: id})
        if (deletedNotification) {
            sails.log(`Deleted notification with id: ${id}.`);
        } else {
            sails.log(`The database does not have a notification with id: ${id}.`);
        }

        return res.json({ notification: deletedNotification });
    }
};

