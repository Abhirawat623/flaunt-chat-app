const express = require("express");
const mongoose= require("mongoose");
const dotenv= require("dotenv");
const app =express();
const cookieParser= require("cookie-parser");
const mongoConnection= require("./db/MongoConnect");
const authRouter= require("./routes/auth.router");
const messageRouter= require("./routes/message.router");
const userRouter= require("./routes/user.router");
//dotenv config
dotenv.config();
//mongo connect
mongoConnection()
//uses json files
app.use(express.json());
//uses cookies to pasre to verify user
app.use(cookieParser());
app.get("/",(req,res)=>{
    //home route 
    res.send("hello devs !")
})
//Port
const PORT=3000 || process.env.PORT;
//auth routes
app.use("/api/auth",authRouter);
//message routes
app.use("/api/messages",messageRouter);
//user routes
app.use("/api/users",userRouter)
mongoose.connection.once("open",()=>{
app.listen(process.env.PORT || 
    PORT,()=>
    console.log("hello,server is running")
)
})