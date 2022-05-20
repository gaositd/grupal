const { Router } = require("express");
const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
const { product } = require("../db.js");
var validate = require("uuid-validate");

const router = Router();

router.post("/", async (req, res, next) => {
  
});

//________________________________________________________________//

router.get("/:idProduct", async (req, res, next) => {
res.send(req.params.idProduct);  
});


module.exports = router;
