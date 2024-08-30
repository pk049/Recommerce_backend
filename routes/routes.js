const express=require("express")
const router=express.Router()



const { adduser }=require('../controllers/adduser')
const { addproduct }=require('../controllers/addproduct')
const { getproducts }=require('../controllers/getproducts')


router.post("/addproduct",addproduct);
router.post("/adduser",adduser);
router.post("/getproducts",getproducts);














module.exports=router;

