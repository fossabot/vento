/**
 * AssetNotificationMapController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {
  create: async function (req, res) {


    let assetnotifs = req.body;
    createdAssetnotifs = [];

    for (let assetnotif of assetnotifs)
    {
        let payload = APIUtil.getCreatePayload(assetnotif);
        let createdAssetnotif = await AssetNotificationMap.createEach(payload).fetch();
        createdAssetnotifs.push(createdAssetnotif[0]);
    }

    sails.log(`Created the AssetNotification(s) successfully: ${JSON.stringify(createdAssetnotifs)}`);
    return res.json({ assetnotifs: createdAssetnotifs });


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
    let ids = req.param('ids');
    let deletedRecords = await AssetNotificationMap.destroy({
      id: { in: ids }
    }).fetch();
    if (deletedRecords) {
      sails.log(`All the assetNotificationMap recorts deleted successfully.`);
    } else {
      sails.log(`Problem in deleting all the assetNotificationMap records`);
    }
    return res.json({ count: deletedRecords.length });
  }
};
