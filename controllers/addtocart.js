const Product = require('../models/Product'); 
const User = require('../models/user');
const mongoose = require('mongoose');

exports.addtocart = async (req, res) => {
    const { username, productname } = req.body;

    try {
        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Ensure the cart array is initialized
        if (!Array.isArray(user.cart)) {
            user.cart = [];
        }

        // Find the product by name
        const product = await Product.findOne({ name: productname });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if the product is already in the cart
        if (user.cart.includes(product._id.toString())) {
            return res.status(400).json({ message: 'Product already in cart' });
        }

        // Add the product ID to the user's cart
        user.cart.push(product._id);
        await user.save();

        res.status(200).json({ message: 'Product added to cart successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
