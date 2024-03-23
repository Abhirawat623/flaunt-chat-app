import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useLogin = () => {
  //loading
  const [loading, setLoading] = useState(false);
  //context
  const {setAuthUser}=useAuthContext()
  const login = async ({ username, password }) => {
    const success = handleInputErrors({ username, password });
    if (!success) return;
    //setting loader true
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      //setting in ;ocal storage
      localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
export default useLogin;
const handleInputErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill in all fileds");
    return false;
  }
  return true;
};
