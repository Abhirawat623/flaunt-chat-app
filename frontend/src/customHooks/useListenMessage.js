// import { useEffect } from "react";
// import {useUser} from "../zustand/useUser"
// import tuneSound from "../assets/sounds/notification.mp3";
// const useListenMessage=()=>{
// const {socket} =useSocketContext();
// const {messages,setMessages} =  useUser()

// useEffect(()=>{
// socket?.on("newMessage",(newMessage)=>{
//     newMessage.shouldShake= true;
//     const sound = new Audio(tuneSound);
//     sound.play();
//     setMessages([...messages,newMessage])
// })

// return ()=> socket?.off("newMessage")

// },[socket,setMessages,messages])

// }
// export default useListenMessage;