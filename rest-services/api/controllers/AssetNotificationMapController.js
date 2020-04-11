/**
 * AssetNotificationMapController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {
  create: async function (req, res) {
    let assetNotificationMaps = req.body;
    let payload = APIUtil.getCreatePayload(assetNotificationMaps);
    let createdAssetNotificationMaps = await AssetNotificationMap.createEach(payload).fetch();
    sails.log(`Created the assetNotificationMap(s) successfully: ${JSON.stringify(createdAssetNotificationMaps)}`);
    return res.json({ assetNotificationMaps: createdAssetNotificationMaps });
  },

  get: async function (req, res) {
    let query = req.query;
    let assetNotificationMaps = await AssetNotificationMap.find(query);
    sails.log(`Fetched all the assetNotificationMaps successfully: ${JSON.stringify(assetNotificationMaps)}`);
    return res.json({ assetNotificationMaps: assetNotificationMaps });
  },

  getById: async function (req, res) {
    let id = req.param('id');
    let assetNotificationMap = await AssetNotificationMap.findOne({ id });
    sails.log(`assetNotificationMap: ${JSON.stringify(AssetNotificationMap.findOne({ id }).populate('id'))}`);
    // sails.log(`Fetched the assetNotificationMap details by ${id}: ${JSON.stringify(assetNotificationMap)}`);
    return res.json({ assetNotificationMap: assetNotificationMap });
  },

  update: async function (req, res) {
    let id = req.param('id');
    let payload = req.body;
    let updatedAssetNotificationMap = await AssetNotificationMap.updateOne({ id }).set(payload);
    if (updatedAssetNotificationMap) {
      sails.log(`Updated the assetNotificationMap of id ${id} with ${JSON.stringify(payload)}`);
    } else {
      sails.log(`The database does not contain a assetNotificationMap having id ${id}.`);
    }
    return res.json({ assetNotificationMap: updatedAssetNotificationMap });
  },

  delete: async function (req, res) {
    let id = req.param('id');
    let deletedAssetNotificationMap = await AssetNotificationMap.destroyOne({ id });
    if (deletedAssetNotificationMap) {
      sails.log(`Deleted AssetNotificationMap with id: ${id}.`);
    } else {
      sails.log(`The database does not have a AssetNotificationMap with id: ${id}.`);
    }
    return res.json({ assetNotificationMap: deletedAssetNotificationMap });
  },

  deleteMulti: async function (req, res) {
    let payload = req.body;
    let deletedRecords = await AssetNotificationMap.destroy({
      id: { in: payload.ids }
    }).fetch();
    if (deletedRecords) {
      sails.log(`All the AssetNotificationMap records deleted successfully.`);
    } else {
      sails.log(`Problem in deleting all the AssetNotificationMap records`);
    }
    return res.json({ count: deletedRecords.length });
  }
};
