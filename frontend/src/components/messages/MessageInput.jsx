import { useState } from "react"
import useSendMessage from "../../customHooks/useSendMessage";
import { BsSend } from "react-icons/bs";
export const MessageInput=()=>{
//message setter
const [message,setMessage]=useState("")
//custom hook of sending message
const {loading,sendMessage} = useSendMessage()
//messages input
const handleMessageSubmit= async (event)=>{
event.preventDefault();
if(!message)
return;
console.log(message)
await sendMessage(message);
 setMessage("")
}

    return(
        <form className='px-4 my-3' onSubmit={handleMessageSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
                 value={message}
                 onChange={event=>setMessage(event.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
				{loading ? (<div className='loading loading-spinner'></div> ):(
                    <BsSend/>
                )}
				</button>
			</div>
		</form>
    )
}