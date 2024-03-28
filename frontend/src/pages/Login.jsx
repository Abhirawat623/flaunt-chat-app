import { useState } from "react";
import {Link} from "react-router-dom";
import useLogin from "../customHooks/useLogin";
import {Toaster} from "react-hot-toast";
import { ThemeChanger } from "../components/ThemeChanger"
export const Login = () => {
 //inputs
 const [inputs,setInputs]=useState({
  username:"",
  password:""
 })
console.log(inputs)
 //hooks components
 const {login,loading}=useLogin();
 //submitting inputs
 const handleSubmit=async (event)=>{
event.preventDefault();
await login(inputs)
 }



  return (
    <div className="flex flex-col items-center justify-center flex-wrap w-full">
      <Toaster/>
      <span className="fixed bottom-10 right-4"><ThemeChanger/></span>
      <div className="w-full p-6 rounded-lg  bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  ">
        <h1 className="text-3xl font-semibold text-center light:text-black cursor-pointer">
          Login
          <span className="text-green-400  cursor-pointer"> FlauntChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base light:text-black label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={event=>setInputs({...inputs,username:event.target.value})}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={event=>setInputs({...inputs,password:event.target.value})}
            />
          </div>
         <Link to="/signup">
          <div className="pt-4 text-sky-400  text-center cursor-pointer">
          New user?
          </div></Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">
            {loading ?(<span className="loading loading-dots  "></span>):(<span>Login</span>)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
