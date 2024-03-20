const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");
// sending messages
const sendMessageHandler= async (req,res)=>{
try {
    //when message sent
    const {message}= req.body;
    //asking for receiver id
    const {id:receiverId} = req.params;
    //asking for user id
    const senderId = req.user._id;
    //waiting for conversations
     const conversation = await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
    });
    //to create new conversation
    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId,receiverId],})}
 //creating messages
const newMessage = new Message({
    senderId,receiverId,message
})
//pushing new messages in conversation which creates messages in conversations
 if(newMessage){
    conversation.messages.push(newMessage._id)
 }
 //socket 

 
 //saving to db
//  await conversation.save();
//  await newMessage.save();
await Promise.all([conversation.save(),newMessage.save()])
} catch (error) {
    console.log("Error in send message controller:",error.message)
    res.status(500).json({error:"internal server error"})
}
};

//getting messages
 const getMessageHandler= async (req,res)=>{

    try {
      const {id:userToChatId} =req.params;
      const senderId=req.user._id;

      const conversation = await Conversation.findOne({
        participants:{$all:[senderId,userToChatId]}
      }).populate("messages");

      //if there is no conversation
      if(!conversation)
      return res.status(200).json([]);
      
      const messages=conversation.messages

      res.status(200).json(messages)


        
    } catch (error) {
        console.log("Error in get messages Handler:",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}


module.exports ={sendMessageHandler,getMessageHandler};