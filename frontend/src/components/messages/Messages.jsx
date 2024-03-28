import { useEffect, useRef } from "react";
import {Message} from "./Message";
import { MessageSkeleton } from "../../skeleton/MessageSkeleton";
import useGetMessage from "../../customHooks/useGetMessage";
import useListenMessage from "../../customHooks/useListenMessage";

export const Messages=()=>{
const {messages,loading}=useGetMessage();
console.log(messages)
//listen messages
useListenMessage();
const lastMessageRef = useRef();

useEffect(() => {
    setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
}, [messages]);
return (
    <div className='px-4 flex-1 overflow-auto z-0'>
        {!loading &&
            messages.length > 0 &&
            messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}

        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && (
            <p className='text-center'>Send a message to start the conversation</p>
        )}
    </div>
);
    
}