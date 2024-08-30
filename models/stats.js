const mongoose=require("mongoose")
const product=require('./Product')

const stats=new mongoose.Schema({
   total_products:{
    type:Number,
    default:0
   },
   total_orders:{
    type:Number,
    default:0
   },
   users:{
    type:Number,
    default:0
   },
})


module.exports=mongoose.model("stat",stats);