const product = require('../models/Product'); 
const mongoose = require('mongoose');

exports.getproducts = async (req, res) =>
 {
    try {
        const products = await product.find().sort({ total_buys: -1 });
       res.status.json({
        status: 'success',
        data:products
       })
        }
    catch (err) 
    {
         res.json({
            message: err.message,
         })
    }
};
