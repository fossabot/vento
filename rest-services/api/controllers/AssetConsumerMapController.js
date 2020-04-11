/**
 * AssetConsumerMapController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const APIUtil = require('../utils/APIUtil');

module.exports = {
  create: async function (req, res) {
    let assetConsumerMaps = req.body;
    let payload = APIUtil.getCreatePayload(assetConsumerMaps);
    let createdAssetConsumerMaps = await AssetConsumerMap.createEach(payload).fetch();
    sails.log(`Created the AssetConsumerMap(s) successfully: ${JSON.stringify(createdAssetConsumerMaps)}`);
    return res.json({ assetConsumerMaps: createdAssetConsumerMaps });
  },

  get: async function (req, res) {
    let query = req.query;
    let assetConsumerMaps = await AssetConsumerMap.find(query);
    sails.log(`Fetched all the AssetConsumerMaps successfully: ${JSON.stringify(assetConsumerMaps)}`);
    return res.json({ assetConsumerMaps: assetConsumerMaps });
  },

  getById: async function (req, res) {
    let id = req.param('id');
    let assetConsumerMap = await AssetConsumerMap.findOne({ id });
    sails.log(`Fetched the AssetConsumerMap details by ${id}: ${JSON.stringify(assetConsumerMap)}`);
    return res.json({ assetConsumerMap: assetConsumerMap });
  },

  update: async function (req, res) {
    let id = req.param('id');
    let payload = req.body;
    let updatedAssetConsumerMap = await AssetConsumerMap.updateOne({ id }).set(payload);
    if (updatedAssetConsumerMap) {
      sails.log(`Updated the AssetConsumerMap of id ${id} with ${JSON.stringify(payload)}`);
    } else {
      sails.log(`The database does not contain a AssetConsumerMap having id ${id}.`);
    }
    return res.json({ assetConsumerMap: updatedAssetConsumerMap });
  },

  delete: async function (req, res) {
    let id = req.param('id');
    let deletedAssetConsumerMap = await AssetConsumerMap.destroyOne({ id });
    if (deletedAssetConsumerMap) {
      sails.log(`Deleted AssetConsumerMap with id: ${id}.`);
    } else {
      sails.log(`The database does not have a AssetConsumerMap with id: ${id}.`);
    }
    return res.json({ assetConsumerMap: deletedAssetConsumerMap });
  },

  deleteMulti: async function (req, res) {
    let ids = req.body.ids;
    let deletedRecords = await AssetConsumerMap.destroy({
      id: { in: ids }
    }).fetch();
    if (deletedRecords) {
      sails.log(`All the AssetConsumerMap recorts deleted successfully.`);
    } else {
      sails.log(`Problem in deleting all the AssetConsumerMap records`);
    }
    return res.json({ count: deletedRecords.length });
  }
};
