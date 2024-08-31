const User = require('../models/user');
const Product = require('../models/Product');

exports.getcart = async (req, res) => {
  try {
    const { username } = req.query;  // Retrieve username from query parameters
    const user = await User.findOne({ username }).populate('cart'); // Populate the cart field with Product documents

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }

    // user.cart now contains the full Product documents due to the populate operation
    const products = user.cart;

    res.status(200).json({
      status: 'success',
      data: products, // Return the products data directly
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
