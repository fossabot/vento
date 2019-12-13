/**
 * DepartmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const uuidv1 = require('uuid/v1');

module.exports = {
    create: async function(req, res) {
        let payload = {};
        payload['id'] = uuidv1();
        payload['name'] = req.body.name;
        payload['location'] = req.body.location;
        
        sails.log.debug(JSON.stringify(payload));
        await Departments.create(payload);
        
        return res.json({ department: payload });
    },

    get: async function(req, res) {
        let departments = await Departments.find();
        return res.json({ departments: [departments] });
    }

};
