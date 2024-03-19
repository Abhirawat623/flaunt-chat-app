const jwt =require("jsonwebtoken");
const User = require("../models/user.model");
const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }
    //verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_CODE);
    if (!decodedToken) {
      return res
        .status(401)
        .json({ error: "Unauthorized - Invalid Token Provided" });
    }
    const user = await User.findById(decodedToken.userId).select("-password");
    //if no user present
    if (!user) {
      return res.status(404).json({ error: "No user found" });
    }
    //if user present please move to next process
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in send verify user controller:", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

module.exports = verifyUser;