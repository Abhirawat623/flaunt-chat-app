const express = require("express");
const sendMessageHandler = require("../controllers/message.controller");
const verifyUser = require("../middleware/verifyUser")
const router = express.Router();

router.post("/send/:id",verifyUser,sendMessageHandler);

module.exports= router;