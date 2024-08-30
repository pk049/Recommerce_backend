const mongoose=require("mongoose")

const order=new mongoose.Schema({
 order_id:{
    type:Number,
    required:true
 },
 product:{
    type:String,
    required:true
 },
 product_price:{
   type:Number,
 },
 time:{
    type:Datetime,
    default:Datetime.now()
    }
})


module.exports=mongoose.model("order",order);