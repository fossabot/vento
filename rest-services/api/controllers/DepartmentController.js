/**
 * DepartmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function (req, res) {
        let depts = req.body;
        createdDepts = [];

        for (let dept of depts)
        {
            let payload = APIUtil.getCreatePayload(dept);
            let createdDept = await Department.createEach(payload).fetch();
            createdDepts.push(createdDept[0]);
        }

        sails.log(`Created the department(s) successfully: ${JSON.stringify(createdDepts)}`);
        return res.json({ departments: createdDepts });
    },

    get: async function (req, res) {
        let query = req.query;
        let departments = await Department.find(query);
        sails.log(`Fetched all the departments successfully: ${JSON.stringify(departments)}`);
        return res.json({ departments: departments });
    },

    getById: async function (req, res) {
        let id = req.param('id');
        let department = await Department.findOne({ id });
        sails.log(`Fetched the department details by ${id}: ${JSON.stringify(department)}`);
        return res.json({ department: department });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.body;
        let updatedDepartment = await Department.updateOne({ id }).set(payload);

        if (updatedDepartment) {
            sails.log(`Updated the department of id ${id} with ${JSON.stringify(payload)}`);
        }
        else {
            sails.log(`The database does not contain a department having id ${id}.`);
        }

        return res.json({ department: updatedDepartment });
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedDept = await Department.destroyOne({id })
        if (deletedDept) {
            sails.log(`Deleted department with id: ${id}.`);
        } else {
            sails.log(`The database does not have a department with id: ${id}`);
        }

        return res.json({ department: deletedDept });
    },

    deleteMulti: async function (req, res) {
        let ids = req.body.ids;
        let deletedRecords = await Department.destroy({
            id: { in: ids }
        }).fetch();
        
        if (deletedRecords) {
            sails.log(`All the department recorts deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the department records`);
        }
        
        return res.json({ count: deletedRecords.length });
    }

};
