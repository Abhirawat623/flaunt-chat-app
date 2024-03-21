import { BiLogOut } from "react-icons/bi";
export const LogoutBtn=()=>{
    return(
<div >
				<BiLogOut className='w-9 h-9 text-white   cursor-pointer' />
				<span className='loading loading-dots'></span>
		</div>
    )
}