const mongoose=require("mongoose")

const dbconnect=()=>
{
    mongoose.connect("mongodb+srv://pusha:pusha123@cluster.zit8svr.mongodb.net/Recommerce", { 
        useNewUrlParser: true,
        useUnifiedTopology: true });
        console.log("Connected to MongoDB");
}



module.exports=dbconnect;





