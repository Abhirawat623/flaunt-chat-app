import {Messages} from "./Messages";
import {MessageInput} from "./MessageInput";
import useUser from "../../zustand/useUser";


export const MessageBox=()=>{
    const {selectedUser}=useUser();
    return(
        <div className='md:min-w-[450px] flex flex-col overflow-x-hidden'>
		
				<>
					{/* Header */}
					<div className='bg-slate-400 px-4 py-2 mb-2 gap-x-1 flex items-center sticky top-0 z-10'>
						<span className='label-text text-black'>To:</span>{" "}
						<span className='text-slate-800 font-bold'>{selectedUser.fullname.charAt(0).toUpperCase()+selectedUser.fullname.slice(1)}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
		</div>
    )
}