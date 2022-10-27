var expressFunction = require('express');
const router = expressFunction.Router();
const authorization = require('../config/authorize');

const products = [
    {
        type : "CPU",
        id: "100001",
        name: "Intel Core i7 Gen 10th",
        detail: 'The Intel Core i7-1-75-H is a high-end processor for laptop with six cores based on the Comet Lake architecture',
        quantity: 10,
        price: 100000 
    
    }];

router.route('/products')
    .get(authorization,(req, res) => {
        res.status(200).json(products)
    })

module.exports = router