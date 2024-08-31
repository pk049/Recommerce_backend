const mongoose=require("mongoose")
const Product=require("../models/Product")

const user=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    order_history:[{
         type:String,
    }],
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Product
    }],
    frequent_search:[{
        type:String
    }]

})


module.exports=mongoose.model("user",user);