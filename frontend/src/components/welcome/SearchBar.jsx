import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetUsers from "../../customHooks/useGetUsers";
import toast from "react-hot-toast"
import useUser from "../../zustand/useUser";
export const SearchBar=()=>{
//hooks	
 const {users}= useGetUsers();
//zustand
const {setSelectedUser}=useUser();

	//search inputs
	const [search,setSearch]=useState();

	const handleSearchInput=(event)=>{
		event.preventDefault();
		if(!search){
			return toast.error("Please type something")
		}
		if(search.length<3){
			return toast.error("requires at least 3 characters to search")
		}

		const user = users.find((item)=>item.fullname.toLowerCase().includes(search.toLowerCase()
		|| item.username.toLowerCase().includes(search.toLowerCase())));
  console.log(user);
		if(user){
			setSelectedUser(user);
		setSearch("")
		}
        else toast.error("No user found !!")


	}
    return(
<form 
 className='flex items-center flex-row w-full gap-x-2 '
 onSubmit={handleSearchInput}>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full w-full'
				onChange={event=> setSearch(event.target.value)}
				value={search}
			/>
			<button type='submit' className='btn btn-circle bg-green-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
    )
}