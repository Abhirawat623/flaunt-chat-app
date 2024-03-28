import { useAuthContext } from "../../context/AuthContext";
import {timeExtract} from "../../utils/timeExtract";
import useUser from "../../zustand/useUser";
export const Message=({ message })=>{
    //context to auth user
const {authUser}= useAuthContext();
//user selected
const {selectedUser} = useUser();
const fromHere = message.senderId ===authUser._id;
const formattedTime= timeExtract(message.createdAt)
const chatClassName = fromHere? "chat-end":"chat-start";
const profilePic= fromHere ? authUser.profilepic: selectedUser.profilepic;
const bubbleBgColor=fromHere ? 'bg-violet-400':"bg-orange-300"
const vibrateClass= message.shouldVibrate ? "shake":""
    return(
        <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS chat bubble component' src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${vibrateClass} pb-2`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs pt-1 flex gap-1 items-center'>{formattedTime}</div>
    </div>
    )
}