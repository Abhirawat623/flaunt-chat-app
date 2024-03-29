import { useSocketContext } from "../../context/SocketContext";
import useUser from "../../zustand/useUser";
import {useNavigate} from "react-router-dom"
export const User = ({ user, emoji, lastIndex }) => {
  //zustand store
  const {selectedUser,setSelectedUser}=useUser();
  //onlineUsers
  const { onlineUsers } = useSocketContext();
  //selected user
  const isSelected = selectedUser?._id === user._id;
  console.log(onlineUsers);
	const isOnline = onlineUsers.includes(user._id);
  console.log(user._id)
  console.log(isOnline)
//use navigate
const navigate = useNavigate()
  const handleUserClicked=()=>{
    setSelectedUser(user);
    navigate(`/chats/${user._id}`)
  }
console.log(selectedUser)
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-green-600" : ""}`}
      onClick={handleUserClicked}>
       <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={user.profilepic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold light:text-black m-200">{user.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

