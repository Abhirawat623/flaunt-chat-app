const express = require("express");
const {signupHandler,loginHandler,logoutHandler}= require("../controllers/auth.controllers");
const router = express.Router();

router.post("/register",signupHandler);

router.post("/login",loginHandler);

router.post("/logout",logoutHandler)

module.exports= router;