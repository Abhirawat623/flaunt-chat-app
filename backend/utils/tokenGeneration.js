const jwt =require("jsonwebtoken");

const tokenGeneration=(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_CODE,
        {expiresIn:"60d"});

res.cookie("jwt",token,{
    maxAge:60*24*60*60*1000,//milliseconds
    httpOnly:true,
    sameSite:"strict",
    secure:process.env.NODE_ENV !=="development"
})
}

module.exports=tokenGeneration;