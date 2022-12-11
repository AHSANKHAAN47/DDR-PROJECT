const { Shop, validateShop } = require('../models/shop');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/getshops', async (req, res, next) => {
    const cookies = req.headers.cookie;
    if (!cookies) { return res.status(404).json({ message: "cookies not found" }) }

    const token = cookies.split("=")[1];
    if (!token) {
        return res.status(400).json({ message: "token not found!" });
    }

    jwt.verify(String(token), config.get("jwtPrivateKey"), (err, user) => {
        if (err) {
            return res.status(400).json({ message: "invalid token" });
        }
        if (String(user.role) != "admin") {
            return res.status(400).json({ message: "user is not priveleged" });
        }
    });
    try {
        const shops = await Shop.find();
        if (!shops) { return res.status(404).json({ message: "shops not found" }) }
        res.status(200).json({ shops });
    }
    catch (err) {
        return new Error(err);
    }
});

router.post('/', async (req, res, next) => {
    const cookies = req.headers.cookie;
    if (!cookies) { return res.status(404).json({ message: "cookies not found" }) }

    const token = cookies.split("=")[1];
    if (!token) {
        return res.status(400).json({ message: "token not found!" });
    }

    jwt.verify(String(token), config.get("jwtPrivateKey"), (err, user) => {
        if (err) {
            return res.status(400).json({ message: "invalid token" });
        }
        if (String(user.role) != "admin") {
            return res.status(400).json({ message: "user is not priveleged" });
        }
    });
    const { error } = validateShop(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    const hashedPassword = bcrypt.hashSync(req.body.password);
    const shop = new Shop({
        shopname: req.body.shopname,
        location: req.body.location,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role
    });
    try {
        await shop.save();
        res.status(200).json({ message: "shop created successfully" });
    }
    catch (err) {
        return new Error(err);
    }
});

router.post("/delete-shop", async (req, res, next) => {
    console.log(req.body.email)
    const cookies = req.header.cookies;
    if (!cookies) { return res.status(404).json({ message: "cookies not found!" }); }
    const token = cookies.split("=")[1];
    if (!token) { return res.status(404).json({ message: "token not found" }); }
    jwt.verify(String(token), config.get("jwtPrivateKey"), (err, user) => {
        if (err) {
            return res.status(400).json({ message: "invalid token" });
        }
        if (String(user.role) != "admin") {
            return res.status(400).json({ message: "user is not privileged" });
        }

    });
    try {
        const shop = await Shop.findOneAndRemove({ email: req.body.email });
        res.status(200).json({ message: "Shop was deleted succesfully" });
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({ message: "Shop cant be deleted!" });
    }

});

module.exports = router;