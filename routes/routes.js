// routes/product.js (or your routes file)

const express = require('express');
const router = express.Router();
const product = require('../models/Product'); // Import the product model

const { adduser } = require('../controllers/adduser');
const { addproduct } = require('../controllers/addproduct');
const { getproducts } = require('../controllers/getproducts');
const { getusers } = require('../controllers/getusers');
const { getuserswithpasswords } = require('../controllers/getuserwithpaswords');
const {addtocart}=require('../controllers/addtocart')
const {getcart}=require('../controllers/getcart')

// Define routes
router.post("/addproduct", addproduct);
router.post("/adduser", adduser);
router.get("/getproducts", getproducts);
router.get("/getusers", getusers);
router.get("/getuserswithpasswords", getuserswithpasswords);
router.get("/getcart",getcart)


// Route to get a single product by name
router.get('/getproduct/:productname', async (req, res) => {
    try {
        const { productname } = req.params; // Get the product name from the request parameters
        const singleProduct = await product.findOne({ name: productname }); // Query the product by name

        if (!singleProduct) {
            return res.status(404).json({
                status: 'fail',
                message: 'Product not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: singleProduct
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});


router.post('/addtocart',addtocart)
module.exports = router;
