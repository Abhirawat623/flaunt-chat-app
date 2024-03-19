const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const tokenGeneration = require("../utils/tokenGeneration");
//signup controller
const signupHandler = async (req, res) => {
  try {
    const { fullname, username, password, confirmedPassword, gender } =
      req.body;
    //if pass and confrm pass don't match
    if (password !== confirmedPassword) {
      return res.status(400).json({ error: "Passwords not matched" });
    }
    //if user already exist
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    //crypted pass
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //profile picture
    const maleDp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleDp = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    //const new user
    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilepic: gender === "female" ? femaleDp : maleDp,
    });
    //if new user created
    if (newUser) {
      //jwt+cokee
      tokenGeneration(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilepic: newUser.profilepic,
      });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("error in register module", error.messsage);
    res.status(500).json({ error: "Server error" });
  }
};
//login controller

const loginHandler = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordRight = await bcrypt.compare(password, user?.password || "");
    //if invalid creds
    if (!user || !isPasswordRight) {
      res.status(400).json({ error: "invalid username or password" });
    }
    tokenGeneration(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilepic: user.profilepic,
    });
  } catch (error) {
    console.log("error in login module", error.messsage);
    res.status(500).json({ error: "Server error" });
  }
};
//logout
const logoutHandler = async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"logged out successfully!"})
    } catch (error) {
        console.log("error in logout module", error.messsage);
    res.status(500).json({ error: "Server error" });
    }
}
module.exports = {signupHandler,loginHandler,logoutHandler}

