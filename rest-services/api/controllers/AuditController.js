/**
 * AuditController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function(req, res) {
        let payload = req.param('audit');
        let updatedPayload = APIUtil.addUUID(payload);
        let audit = await Audit.create(updatedPayload).fetch();
        sails.log(`Created the audit successfully: ${JSON.stringify(audit)}`);
        return res.json({ audit: audit });
    },

    get: async function (req, res) {
        let query = req.query;
        let audit = await Audit.find(query);
        sails.log(`Fetched all the audit successfully: ${JSON.stringify(audit)}`);
        return res.json({ audits: audit });
    }
};

