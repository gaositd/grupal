const { Router } = require('express');
const router = Router();
const Product = require('./product.js');
const Category = require('./category.js');
const User = require('./user.js');

router.use('/product', Product);
router.use('/category', Category);
router.use('/user', User);
router.use('/', (req, res) => {
    res.send('APP is running');
})

module.exports = router;