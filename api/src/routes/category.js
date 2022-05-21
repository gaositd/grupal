const { Router } = require("express");
const router = Router();
const { v4: uuidv4 } = require("uuid");
//const { getProduct, getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/product");
const { Product } = require("../db.js");




router.get("/:idCategory", async (req, res, next) => {
    try {
        //const category = await Category.findByPk(req.params.idProduct);
        const category = await Category.findOne({
            where: {
                id: req.params.idCategory
            }
        });
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({
                message: "category not found"
            });
        }
    } catch (error) {
        next(error);
    }
});
//________________________________________________________________//

router.post("/", async (req, res, next) => {
    let {name, description} = req.body;
    try {
        console.log(req.body);
        const categoryCreated = await Category.findOrCreate({
            where: {
                id: uuidv4(),
                name,
                description
             
            }
        })
        res.send(categoryCreated);
       
    } catch (error) {
        
    }
    
});

module.exports = router;