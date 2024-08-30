const express=require('express')
const app=express()

const cors = require('cors');
app.use(cors())


app.use(express.json())

const routes=require("./routes/routes")
app.use("/api/v1",routes);



app.listen(3000,()=>{
    console.log("Recommerce started..........");
})

const dbconnect=require('./config/database');
dbconnect();

app.get('/',(req,res)=>{
    res.send("Hello Admin.........")
})