const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    link: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    pid: {
        type: Number
    },
    product_type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number
    },
    total_buys: {
        type: Number,
        default: 0
    },
    similar_products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'  // Reference by model name as a string
    }],
    average_rating: {
        type: Number
    },
    category_buys: {
        type: Number
    },
    similar_prods:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'  // Reference by model name as a string
  }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
