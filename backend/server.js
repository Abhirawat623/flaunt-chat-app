const express = require("express");
const mongoose= require("mongoose");
const dotenv= require("dotenv");
const app =express();
const mongoConnection= require("./db/MongoConnect");
const authRouter= require("./routes/auth.router");
//dotenv config
dotenv.config();
//mongo connect
mongoConnection()
//uses json files
app.use(express.json());
app.get("/",(req,res)=>{
    //home route 
    res.send("hello devs !")
})
//Port
const PORT=3000 || process.env.PORT;
//auth routes
app.use("/api/auth",authRouter);

mongoose.connection.once("open",()=>{
app.listen(process.env.PORT || 
    PORT,()=>
    console.log("hello,server is running")
)
})