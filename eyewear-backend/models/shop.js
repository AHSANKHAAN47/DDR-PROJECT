const Joi = require('joi');
const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    shopname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    products: {
        type: Array
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const Shop = mongoose.model('Shop', shopSchema);

function shopValidate(shop) {
    const schema = Joi.object({
        shopname: Joi.string().required(),
        location: Joi.string().required(),
        products: Joi.string(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().required(),
    });
    return schema.validate(shop);
}

exports.Shop = Shop;
exports.validateShop = shopValidate;
exports.shopSchema = shopSchema;
