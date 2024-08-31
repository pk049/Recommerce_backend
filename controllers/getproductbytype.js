// controllers/productController.js
const Product = require('../models/Product');

const getProductsByType = async (req, res) => {
  try {
    const { type } = req.body;



    // Find products of the specified type
    const products = await Product.find({ product_type:type });

    // Respond with the list of products
    res.status(200).json({ data: products });
  } catch (error) {
    console.error('Error fetching products by type:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getProductsByType,
};
