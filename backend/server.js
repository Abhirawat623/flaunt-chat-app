const path=require("path");
const express = require("express");
const dotenv= require("dotenv");
const cookieParser= require("cookie-parser");
const mongoConnection= require("./db/MongoConnect");
const authRouter= require("./routes/auth.router");
const messageRouter= require("./routes/message.router");
const userRouter= require("./routes/user.router");
//socket
const {app,server}=require("./socket/socket");
let currentDirectory = __dirname;
console.log("11:"+currentDirectory)
currentDirectory=path.resolve();
//dotenv config
dotenv.config();
//uses json files
app.use(express.json());
//uses cookies to pasre to verify user
app.use(cookieParser());
app.get("/",(req,res)=>{
    //home route 
    res.send("hello devs !")
})
//Port
const PORT=process.env.PORT || 5000 ;
//auth routes
app.use("/api/auth",authRouter);
//message routes
app.use("/api/messages",messageRouter);
//user routes
app.use("/api/users",userRouter)
// Serve static files from the "frontend/dist" directory
app.use(express.static(path.join(currentDirectory, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(currentDirectory, "frontend", "dist", "index.html"));
});


server.listen(PORT, () => {
	mongoConnection()
	console.log(`Server Running on port ${PORT}`);
});