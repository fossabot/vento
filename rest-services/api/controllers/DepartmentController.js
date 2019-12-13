/**
 * DepartmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const uuidv1 = require('uuid/v1');

module.exports = {
    create: async function (req, res) {
        let payload = {};
        payload['id'] = uuidv1();
        payload['name'] = req.body.name;
        payload['location'] = req.body.location;

        let createdUser = await Departments.create(payload).fetch();
        sails.log(`Created the department successfully: ${JSON.stringify(createdUser)}`);
        return res.json({ department: createdUser });
    },

    get: async function (req, res) {
        let departments = await Departments.find();
        sails.log(`Fetched all the departments successfully: ${JSON.stringify(departments)}`);
        return res.json({ departments: [departments] });
    },

    getById: async function (req, res) {
        let id = req.param('id');
        sails.log.debug(id);
        let department = await Departments.findOne({ id: id });
        sails.log(`Fetched the department details by ${id}: ${JSON.stringify(department)}`);
        return res.json({ department: department });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = {};
        payload['name'] = req.body.name;
        payload['location'] = req.body.location;
        let updatedDepartment = await Departments.updateOne({ id: id })
            .set(payload);

        if (updatedDepartment) {
            sails.log(`Updated the department of id ${id} with ${JSON.stringify(payload)}`);
        }
        else {
            sails.log(`The database does not contain a department having id ${id}.`);
        }

        return res.json({ department: updatedDepartment });
    }

};
