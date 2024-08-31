const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

// Importing controllers
const { adduser } = require('../controllers/adduser');
const { addproduct } = require('../controllers/addproduct');
const { getproducts } = require('../controllers/getproducts');
const { getusers } = require('../controllers/getusers');
const { getuserswithpasswords } = require('../controllers/getuserwithpaswords');
const { addtocart } = require('../controllers/addtocart');
const { getcart } = require('../controllers/getcart');
const { getusersfull } = require('../controllers/getuserfull');
const { getproductbyid } = require('../controllers/getproductbyid');
const { searchUnsplashPhotos } = require('../controllers/getimagewithapi');
const { getproduct_byname } = require('../controllers/getproduct_byname');
const {getAllProducts,searchProducts}=require('../controllers/productcontroller')
const {getProductsByType}=require('../controllers/getproductbytype')
// Define routes
router.post("/addproduct", addproduct);
router.post("/adduser", adduser);
router.get("/getproducts", getproducts);
router.get("/getusers", getusers);
router.get("/getuserswithpasswords", getuserswithpasswords);
router.get("/getcart", getcart);  // Fixed route to handle query parameters correctly
router.get("/getimg/:query", searchUnsplashPhotos);
router.get("/getproductbyname/:productname", getproduct_byname);
router.get("/getproductbyid/:productid", getproductbyid);
router.get('/getproducts', getAllProducts);
router.post('/getproductbytype', getProductsByType);

// Route to search for products
router.get('/searchproducts',searchProducts);





;

// Route to add a product to the cart
router.post('/addtocart', addtocart);

// Route to get full user details
router.get('/getuserfull', getusersfull);

module.exports = router;
