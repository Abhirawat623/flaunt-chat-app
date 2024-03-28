import { BiLogOut } from "react-icons/bi";
import useLogout from "../../customHooks/useLogout"
export const LogoutBtn=()=>{
	//importing from hook
	const {loading,logout}=useLogout()
	
	return(
<div >
{!loading? (<BiLogOut className='w-9 h-9 text-gray-500  cursor-pointer' onClick={logout}/>):(
	<span className='loading loading-dots'></span>


)}

				
				
		</div>
    )
}