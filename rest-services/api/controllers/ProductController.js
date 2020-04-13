/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function (req, res) {


        let products = req.body;
        createdProducts = [];
        for (let product of products) {
            let payload = APIUtil.getCreatePayload(product);
            let createdProduct = await Product.createEach(payload).fetch();
            createdProducts.push(createdProduct[0]);
        }
        sails.log(`Created the Product(s) successfully: ${
            JSON.stringify(createdProducts)
        }`);
        return res.json({products: createdProducts});
    },

    get: async function (req, res) {
        let query = req.query;
        let products = await Product.find(query);
        sails.log(`Fetched all the products successfully: ${
            JSON.stringify(products)
        }`);
        return res.json({products: products});
    },

    getById: async function (req, res) {
        let id = req.param('id');
        let product = await Product.findOne({id});
        sails.log(`Fetched the product details by ${id}: ${
            JSON.stringify(product)
        }`);
        return res.json({product: product});
    },

    update: async function (req, res) {
        let id = req.param('id');
        let payload = req.body;
        let updatedProduct = await Product.updateOne({id}).set(payload);

        if (updatedProduct) {
            sails.log(`Updated the product of id ${id} with ${
                JSON.stringify(payload)
            }`);
        } else {
            sails.log(`The database does not contain a product having id ${id}.`);
        }

        return res.json({product: updatedProduct});
    },

    delete: async function (req, res) {
        let id = req.param('id');
        let deletedProduct = await Product.destroyOne({id})
        if (deletedProduct) {
            sails.log(`Deleted product with id: ${id}.`);
        } else {
            sails.log(`The database does not have a product with id: ${id}.`);
        }

        return res.json({product: deletedProduct});
    },

    deleteMulti: async function (req, res) {
        let ids = req.body.ids;
        let deletedRecords = await Product.destroy({
            id: {
                in: ids
            }
        }).fetch();

        if (deletedRecords) {
            sails.log(`All the product recorts deleted successfully.`);
        } else {
            sails.log(`Problem in deleting all the product records`);
        }
        return res.json({count: deletedRecords.length});
    }
};
