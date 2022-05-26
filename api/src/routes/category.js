const { Router } = require("express");
const router = Router();
//const { getProduct, getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/product");
const { Category } = require("../db.js");

router.get('/',async(req,res)=>{
  const category = await Category.findAll();
  try {
    category? res.json(category):res.send("there are no categories")
    
  } catch (error) {
    res.send(error)
  }
})


router.get('/', async (req, res) => {
  const category = await Category.findAll();
  try {
    category ? res.json(category) : res.send("there are no categories")

  } catch (error) {
    res.send(error)
  }
})

router.get("/:idCategory", async (req, res, next) => {
    try {
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
// ________________________________________________________________//

router.post("/", async(req,res)=>{
    const { 
        id,
        name,
        description} = req.body;

    try {
        const newCategory = await Category.create({
          id,
          name,
          description,
        });


          res.send(newCategory);
        
    } catch (error) {
        res.send(error)
    }
    
})

router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const {name, description }= req.body;
    let categoryUpdated = await Category.findOne({
      where: { id: id },
    });
    await categoryUpdated.update({
        name,
        description 
    });

    res.send("category updated.");
  });
  
  router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Category.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("category deleted.");
  });



module.exports = router;