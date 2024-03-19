const mongoose= require("mongoose");

const messageSchema = new mongoose.Schema({
    //user sends message
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }, 
    //user receive message
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
},
{timestamps:true});

const Message = mongoose.model("Message",messageSchema);

module.exports= Message;