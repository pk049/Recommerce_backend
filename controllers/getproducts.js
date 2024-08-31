const product = require('../models/Product'); 
const mongoose = require('mongoose');

exports.getproducts = async (req, res) =>
 {
    try {
        const products = await product.find()
       res.status(200).json({
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
