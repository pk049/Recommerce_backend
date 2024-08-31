// routes/product.js (or your routes file)

const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Import the product model
const mongoose=require('mongoose')

const { adduser } = require('../controllers/adduser');
const { addproduct } = require('../controllers/addproduct');
const { getproducts } = require('../controllers/getproducts');
const { getusers } = require('../controllers/getusers');
const { getuserswithpasswords } = require('../controllers/getuserwithpaswords');
const {addtocart}=require('../controllers/addtocart')
const {getcart}=require('../controllers/getcart')
const {getusersfull}=require('../controllers/getuserfull')
// const {getproductbyid}=require('../controllers/getproductbyid')
const {searchUnsplashPhotos}=require('../controllers/getimagewithapi')




// Define routes
router.post("/addproduct", addproduct);
router.post("/adduser", adduser);
router.get("/getproducts", getproducts);
router.get("/getusers", getusers);
router.get("/getuserswithpasswords", getuserswithpasswords);
router.get("/getcart",getcart)
router.get("/getimg/:query",searchUnsplashPhotos)
// router.get("/getproductbyid/:productid",getproductbyid)




// Route to get a single product by name
// In routes/product.js

router.get('/getproductbyid', async (req, res) => {
    try {
        const { productid } = req.query;

   
       

        const productObjectId = new mongoose.Types.ObjectId(productid);
        const singleProduct = await Product.findById(productObjectId);

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
            message: err.message,
        });
    }
});

// In routes/product.js

// Route to get a single product by ID
// In routes/product.js

// Route to get a single product by ID using query parameters
router.get('/getproductbyid', async (req, res) => {
    try {
        const { productid } = req.query; // Get the product ID from the query parameters

        // Ensure productid is provided
        if (!productid) {
            return res.status(400).json({
                status: 'fail',
                message: 'Product ID is required'
            });
        }

        // Convert productid to ObjectId
        const productObjectId = new mongoose.Types.ObjectId(productid);

        const singleProduct = await Product.findById(productObjectId); // Query the product by ID

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
            message: err.message,
        });
    }
});



router.post('/addtocart',addtocart)
router.get('/getuserfull',getusersfull)
module.exports = router;
