/**
 * SoftwareAssetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function (req, res) {
        let softwareAssets = req.param('softwareAssets');
        let payload = APIUtil.getCreatePayload(softwareAssets);
        let createdSoftwareAssets = await SoftwareAsset.createEach(payload).fetch();
        sails.log(`Created the SoftwareAsset(s) successfully: ${JSON.stringify(createdSoftwareAssets)}`);
        return res.json({ softwareAssets: createdSoftwareAssets });
    },

    get: async function (req, res) {
        let query = req.query;
        let softwareAssets = await SoftwareAsset.find(query);
        sails.log(`Fetched all the softwareAssets successfully: ${JSON.stringify(softwareAssets)}`);
        return res.json({ softwareAssets: softwareAssets });
    },
    getById: async function (req, res) {
        let id = req.param('id');
        let softwareAsset = await SoftwareAsset.findOne({ id: id });
        sails.log(`Fetched the SoftwareAsset details by ${id}: ${JSON.stringify(SoftwareAsset)}`);
        return res.json({ SoftwareAsset: SoftwareAsset });
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.param('SoftwareAsset');
        let updatedSoftwareAsset = await SoftwareAsset.updateOne({ id: id })
            .set(payload);

        if (updatedSoftwareAsset) {
            sails.log(`Updated the softwareAsset of id ${id} with ${JSON.stringify(payload)}`);
        }
        else {
            sails.log(`The database does not contain a softwareAsset having id ${id}.`);
        }

        return res.json({ softwareAsset: updatedSoftwareAsset });
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedSoftwareAsset = await SoftwareAsset.destroyOne({id: id})
        if (deletedSoftwareAsset) {
            sails.log(`Deleted SoftwareAsset with id: ${id}.`);
        } else {
            sails.log(`The database does not have a SoftwareAsset with id: ${id}.`);
        }

        return res.json({ softwareAsset: deletedSoftwareAsset });
    },

    deleteMulti: async function (req, res) {
        let ids = req.param('ids');
        let deletedRecords = await SoftwareAsset.destroy({
            id: { in: ids }
        }).fetch();
        
        if (deletedRecords) {
            sails.log(`All the softwareAsset recorts deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the softwareAsset records`);
        }
        
        return res.json({ count: deletedRecords.length });
    }

};

