
import { IoSearchSharp } from "react-icons/io5";
export const SearchBar=()=>{
    return(
<form 
 className='flex items-center flex-row w-full gap-x-2 '>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full w-full'
			/>
			<button type='submit' className='btn btn-circle bg-green-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
    )
}