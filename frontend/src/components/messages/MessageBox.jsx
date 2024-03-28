import {Messages} from "./Messages";
import {MessageInput} from "./MessageInput";
import useUser from "../../zustand/useUser";
import { ThemeChanger } from "../ThemeChanger";

export const MessageBox=()=>{
    const {selectedUser}=useUser();
    return(<>
        <div className='md:min-w-[450px] flex flex-col overflow-x-hidden sticky top-0 z-10'>
					{/* Header */}
					<div className='glass  transparent px-4 py-2 mb-2 gap-x-1 flex items-center '>
						<span className='label-text text-black'>To:</span>{" "}
						<span className="fixed z-20 top-0 right-3"><ThemeChanger/></span>
						<span className='text-blue-400 font-bold'>{selectedUser.fullname.charAt(0).toUpperCase()+selectedUser.fullname.slice(1)}</span>
					</div>
		</div>
		<Messages />
		<MessageInput />
		</>
    )
}