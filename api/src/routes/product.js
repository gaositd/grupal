const { Router } = require("express");
const router = Router();
const { v4: uuidv4 } = require("uuid");
//const { getProduct, getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/product");
const { Product } = require("../db.js");

// router.get("/", async (req, res, next) => {
//     console.log("getProducts");
//     res.send("getProducts");
// });



router.get("/:idProduct", async (req, res, next) => {
    console.log(req.query);
    console.log(req.params);
    const { idProduct } = req.params;

    try {
        if (idProduct) {
            console.log(idProduct)
            const product = await Product.findOne({
                where: {
                    id: idProduct
                }
            });
            
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({
                    message: "Product not found"
                });
            }
        } else {
            
            res.status(400).json({
                message: "Bad request"
            });
            
            
        } 


        //const product = await Product.findByPk(req.params.idProduct);
        
    } catch (error) {
        next(error);
    }

});





//________________________________________________________________//

router.post("/", async (req, res, next) => {
    let {name, description, image, ranking, createBy, price, category, stock} = req.body;
        
    //console.log(req.body);
    try {
        
        const productCreated = await Product.findOrCreate({
            where: {
                id: uuidv4(),
                name,
                description,
                image,
                ranking,
                createBy,
                price,
                category,
                stock
                
                
            }
        })
        //res.send(productCreated);
        //res.send(productCreated[0].category);
        await productCreated.setCategories(productCreated.category);
        
        // console.log(productCreated);
        // await productCreated[0].setCategories(category)
        
    } catch (error) {
        
    }
    res.send('Created succesfully, saludos desde el BACK!!')

    
});

module.exports = router;
