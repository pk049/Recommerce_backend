const User=require('../models/user')
const Product=require('../models/Product')

exports.getcart = async (req, res) => {
    try {
      const { username } = req.query;  // Changed from req.body to req.query
      const user = await User.findOne({ username });
      
      const ProductNames = user.cart;
      res.status(200).json({
        status: 'success',
        data: ProductNames
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };