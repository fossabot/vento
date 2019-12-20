/**
 * HardwareAssetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const APIUtil = require('../utils/APIUtil');
module.exports = {
    create: async function (req, res) {
        let hardwareAssets = req.param('hardwareAssets');
        let payload = APIUtil.getCreatePayload(hardwareAssets);
        let createdHardwareAssets = await HardwareAsset.createEach(payload).fetch();
        sails.log(`Created the hardwareAsset(s) successfully: ${JSON.stringify(createdHardwareAssets)}`);
        return res.json({ hardwareAssets: createdHardwareAssets });
    },

    get: async function (req, res) {
        let query = req.query;
        let hardwareAssets = await HardwareAsset.find(query);
        sails.log(`Fetched all the hardwareAssets successfully: ${JSON.stringify(hardwareAssets)}`);
        return res.json({ hardwareAssets: hardwareAssets });
    },
    getById: async function (req, res) {
        let id = req.param('id');
        let hardwareAsset = await HardwareAsset.findOne({ id: id });
        sails.log(`Fetched the hardwareAsset details by ${id}: ${JSON.stringify(hardwareAsset)}`);
        return res.json({ hardwareAsset: hardwareAsset });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.param('hardwareAsset');
        let updatedHardwareAsset = await HardwareAsset.updateOne({ id: id })
            .set(payload);

        if (updatedHardwareAsset) {
            sails.log(`Updated the hardwareAsset of id ${id} with ${JSON.stringify(payload)}`);
        }
        else {
            sails.log(`The database does not contain a hardwareAsset having id ${id}.`);
        }

        return res.json({ hardwareAsset: updatedHardwareAsset });
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedHardwareAsset = await HardwareAsset.destroyOne({id: id})
        if (deletedHardwareAsset) {
            sails.log(`Deleted hardwareAsset with id: ${id}.`);
        } else {
            sails.log(`The database does not have a hardwareAsset with id: ${id}.`);
        }

        return res.json({ hardwareAsset: deletedHardwareAsset });
    },

    deleteMulti: async function (req, res) {
        let ids = req.param('ids');
        let deletedRecords = await HardwareAsset.destroy({
            id: { in: ids }
        }).fetch();
        
        if (deletedRecords) {
            sails.log(`All the hardwareAsset recorts deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the hardwareAsset records`);
        }
        
        return res.json({ count: deletedRecords.length });
    }
};

