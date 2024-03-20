const express = require("express");
const {sendMessageHandler,getMessageHandler} = require("../controllers/message.controller");
const verifyUser = require("../middleware/verifyUser")
const router = express.Router();

router.post("/send/:id",verifyUser,sendMessageHandler);

router.get("/:id",verifyUser,getMessageHandler);

module.exports= router;
