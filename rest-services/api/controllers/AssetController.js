/**
 * AssetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const CONSTANTS = require('../../CONSTANTS');
const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function (req, res) {
        let assets = req.body;
        createdAssets = [];
        for (let asset of assets) {
            let payload = (APIUtil.getCreatePayload(asset));
            let createdAsset = await Asset.createEach(payload).fetch();
            createdAssets.push(createdAsset[0]);
            payloadsData = [
                {
                    'type': 'email',
                    'notes': '',
                    'receivers': payload[0].owner_id
                }, {
                    'type': 'text',
                    'notes': '',
                    'receivers': payload[0].owner_id
                }
            ];
            for (let payloadData of payloadsData) {
                let newPayload = APIUtil.getCreatePayload(payloadData);
                let notificationRecord = await Notification.createEach(newPayload).fetch();
                let newPayloadData = {
                    'asset_id': payload[0].id,
                    'notification_id': newPayload[0].id
                };
                newPayload = APIUtil.getCreatePayload(newPayloadData);
                let assetNotificationRecord = await AssetNotificationMap.createEach(newPayload).fetch();
            }
        }
        sails.log(`Created the Assets(s) successfully: ${
            JSON.stringify(createdAssets)
        }`);
        return res.json({assets: createdAssets});
    },

    get: async function (req, res) {
        let query = req.query;
        let assets = await Asset.find({
            where: query,
            select: [
                'asset_type',
                'product_id',
                'department_id',
                'owner_id',
                'software_name',
                'hardware_type'
            ]
        });
        for (let asset of assets) {
            {
                asset.asset_type === 'Software' ? (asset.assetName = asset.software_name) : (asset.assetName = asset.hardware_type)
            }
            let ownerRecord = await User.findOne({id: asset.owner_id});
            asset.ownerName = ownerRecord.first_name;
            let productRecord = await Product.findOne({id: asset.product_id});
            asset.productName = productRecord.display_name;
            let departmentRecord = await Department.findOne({id: asset.department_id});
            asset.departmentName = departmentRecord.display_name;
        }
        sails.log(`Fetched all the Assets successfully: ${
            JSON.stringify(assets)
        }`);
        return res.json({assets: assets});
    },

    getById: async function (req, res) {
        let id = req.param('id');
        let asset = await Asset.findOne({id}).populate(CONSTANTS.modelNames.CONSUMERS).populate(CONSTANTS.modelNames.NOTIFICATIONS);
        asset.consumerNames = [];
        for (let consumer of asset.consumers) {
            let consumerRecord = await User.findOne({
                where: {
                    id: consumer.consumer_id
                },
                select: ['first_name', 'last_name']
            });
            asset.consumerNames.push(consumerRecord.first_name + ' ' + consumerRecord.last_name);
        }
        for (let notification of asset.notifications) {
            let notificationRecord = await Notification.findOne({id: notification.notification_id});
            notification.type = notificationRecord.type;
            notification.receivers = notificationRecord.receivers.split(',');
        }

        let ownerRecord = await User.findOne({
            where: {
                id: asset.owner_id
            },
            select: ['first_name', 'last_name']
        });
        asset.ownerName = ownerRecord.first_name + ' ' + ownerRecord.last_name;
        let productRecord = await Product.findOne({
            where: {
                id: asset.product_id
            },
            select: ['display_name']
        });
        asset.productName = productRecord.display_name;
        let departmentRecord = await Department.findOne({
            where: {
                id: asset.department_id
            },
            select: ['display_name']
        });
        asset.departmentName = departmentRecord.display_name;
        sails.log(`Fetched the Asset details by ${id}: ${
            JSON.stringify(asset)
        }`);
        return res.json({asset: asset});
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.body;
        let updatedAsset = await Asset.updateOne({id}).set(payload);
        if (updatedAsset) {
            sails.log(`Updated the Asset of id ${id} with ${
                JSON.stringify(payload)
            }`);
        } else {
            sails.log(`The database does not contain a Asset having id ${id}.`);
        }
        return res.json({asset: updatedAsset});
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedAsset = await Asset.destroyOne({id})
        if (deletedAsset) {
            sails.log(`Deleted Asset with id: ${id}.`);
        } else {
            sails.log(`The database does not have a Asset with id: ${id}.`);
        }
        return res.json({asset: deletedAsset});
    },

    deleteMulti: async function (req, res) {
        let ids = req.body.ids;
        let deletedRecords = await Asset.destroy({
            id: {
                in: ids
            }
        }).fetch();
        if (deletedRecords) {
            sails.log(`All the Asset records deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the Asset records`);
        }
        return res.json({count: deletedRecords.length});
    }
};
