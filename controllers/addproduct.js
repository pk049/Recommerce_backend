const product = require('../models/Product'); 
const stat=require('../models/stats')
const mongoose = require('mongoose');

exports.addproduct = async (req, res) =>
 {
    try {
           const{name,pid,price,type,quantity,orders}=req.body;
           const Product = new product({name,pid,price,type,quantity,orders});
           await Product.save();
           res.json({message: 'Product added successfully'});

           await stat.updateOne({}, { $inc: { total_products: 1 } });        
        
        }
    catch (err) 
    {
         res.json({
            message: err.message,
         })
    }
};
