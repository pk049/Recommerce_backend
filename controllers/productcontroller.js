// controllers/productController.js
const Product = require('../models/Product'); // Assuming you have a Product model

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Search products
exports.searchProducts = async (req, res) => {
  try {
    const query = req.query.query || ''; // Get the search query from the request
    const products = await Product.find({ name: new RegExp(query, 'i') }); // Search products by name (case-insensitive)
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
