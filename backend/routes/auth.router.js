const express = require("express");
const signupHandler= require("../controllers/auth.controllers");
const router = express.Router();

router.post("/register",signupHandler);

// router.post("/register",(req,res)=>{
    
// });

// router.post("/register",(req,res)=>{
//     res.send("Signup")
// });

module.exports= router;