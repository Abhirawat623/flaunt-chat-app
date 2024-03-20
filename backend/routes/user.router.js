const express = require("express");
const router= express.Router();
const verifyUser = require("../middleware/verifyUser");
const getUserHandler= require("../controllers/user.controller")

router.get("/",verifyUser,getUserHandler);

module.exports=router;