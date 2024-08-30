const mongoose=require("mongoose")

const product=new mongoose.Schema({
   link:{
        type:String
   },
   name:{
    type:String,
    required:true
   },
   pid:{
    type:Number,
   },
   product_type:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   quantity:{
    type:Number,
   },
   total_buys:{
    type:Number,
    default:0
   },
   similar_products:[{
      type:String
   }],
   average_rating:{
      type:Number,
   },
   category_buys:{
      type:Number,
   }
})


module.exports=mongoose.model("product",product);