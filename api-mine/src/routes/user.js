const router = require('express').Router();
const axios = require('axios');
const { conn, Users} = require('../db');
const { Op } = require("sequelize");
const isUUID = require('is-uuid');

router.get("/", async(req,res)=>{
    const users= await User.findAll();
    users.length ? res.json(users) : res.send("Users not found");
});

router.post("/signup", async(req,res)=>{
    const { email, password } = req.body;
    try {
        const [user, created] = await Users.findOrCreate({
            where: {email },
            defaults: {email, password }
        })
        if(created) res.json(user)
        else res.send('Email already in use')
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post("/login", async(req,res)=>{
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({
            where: {email: email}
        })
        if(user.password === password) res.send(user)
        else res.send({});
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;