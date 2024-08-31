const Product = require('../models/Product'); 
const User=require('../models/user')
const mongoose = require('mongoose');

exports.addtocart = async (req, res) =>
 {
   
        const { username, productname } = req.body;

        try {
          // Find the user
          const user = await User.findOne({ username });
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          // Find the product
          const product = await Product.findOne({ name: productname });
          if (!product) {
            return res.status(404).json({ message: 'Product not found' });
          }
      
          // Add the product to the user's cart
          user.cart.push(product);
          await user.save();
      
          res.status(200).json({ message: 'Product added to cart successfully!' });
        } 
        catch (error) {
          res.status(500).json({ message: error.message});
        }
}
