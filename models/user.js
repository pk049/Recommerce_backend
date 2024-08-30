const mongoose=require("mongoose")

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
        type:String,
    }],
    frequent_search:[{
        type:String
    }]

})


module.exports=mongoose.model("user",user);