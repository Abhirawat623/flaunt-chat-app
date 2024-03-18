const User = require("../models/user.model");
//signup controller
const signupHandler = async (req,res)=>{
    try {
        const {fullname,username,password,confirmedPassword,gender} = req.body;
        //if pass and confrm pass don't match
       if(password !== confirmedPassword){
        return res.status(400).json({error:"Passwords not matched"})
       }
       //if user already exist
       const user = await User.findOne({username});
       if(user){
        return res.status(400).json({error:"Username already exists"})
       }
       //profile picture
       const maleDp= `https://avatar.iran.liara.run/public/boy?username=${username}`
       const femaleDp= `https://avatar.iran.liara.run/public/girl?username=${username}`
      //const new user
      const newUser = new User({fullname,username,password,gender,profilepic: gender=== "female"? femaleDp : maleDp })
      await newUser.save();

      res.status(201).json({
        _id:newUser._id,
        fullname:newUser.fullname,
        username:newUser.username,
        profilepic:newUser.profilepic
      })

    } catch (error) {
        console.log("error in register module",error.messsage)
        res.status(500).json({error:"Server error"})
        
    }
}

module.exports= signupHandler;