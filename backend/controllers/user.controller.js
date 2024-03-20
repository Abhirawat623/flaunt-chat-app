const User = require("../models/user.model");

const getUserHandler = async (req,res)=>{

    try {
        //logged in user
        const loggedInUserId=req.user._id;

        const allFilteredUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(allFilteredUsers);

    } catch (error) {
        console.log("Error in getting User handler:",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}

module.exports=getUserHandler;
