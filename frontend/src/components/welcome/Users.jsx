import useGetUsers from "../../customHooks/useGetUsers";
import {getRandomEmoji} from "../../utils/emojis";
import  {User}  from "./User";
import {Toaster} from "react-hot-toast"
export const Users = () => {
  //hooks
  const { loading, users } = useGetUsers();
  console.log(users)



  return (<>
    <div className="py-2 flex flex-col overflow-auto ">
      {users.map((user, idx) => (
        <User
          key={user._id}
          user={user}
          emoji={getRandomEmoji()}
          lastIndex={idx === users.length - 1}
        />
      ))}
      
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
    <Toaster/>
    </>
  );
};
