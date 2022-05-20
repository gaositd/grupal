const router = require('express').Router();
const axios = require('axios');
const { conn,User} = require('../db');
const { Op } = require("sequelize");
const isUUID = require('is-uuid');



router.get("/", async(req,res)=>{
    const users= await User.findAll();
    users.length ? res.json(users) : res.send("Users not found");
});


router.post("/", async(req,res)=>{
    const { 
        usrname,
        name,
        birthdate,
        phone,
        image,
        country,
        mail,
        password } = req.body;

    try {
        const user = await User.create({
            usrname,
            name,
            birthdate,
            phone,
            image,
            country,
            mail,
            password 

          });


          res.send('user created successfully');
        
    } catch (error) {
        res.send(error)
    }
    
})

module.exports = router;
