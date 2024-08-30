const express=require("express")
const router=express.Router()



const { adduser }=require('../controllers/adduser')
const { addproduct }=require('../controllers/addproduct')
const { getproducts }=require('../controllers/getproducts')
const {getusers}=require("../controllers/getusers")
const {getuserwithpasswrds, getuserswithpasswords}=require('../controllers/getuserwithpaswords')


router.post("/addproduct",addproduct);
router.post("/adduser",adduser);
router.post("/getproducts",getproducts);
router.get("/getusers",getusers)
router.get("/getuserswithpasswords",getuserswithpasswords)














module.exports=router;

