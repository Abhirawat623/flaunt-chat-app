import {Link} from "react-router-dom";
export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-wrap  w-full">
      <div className="w-full p-6 rounded-lg  bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 cursor-pointer">
          Login
          <span className="text-green-400 cursor-pointer"> FlauntChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
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
            />
          </div>
         <Link to="/signup">
          <div className="pt-4 text-sky-400 text-center cursor-pointer">
          New user?
          </div></Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">
              <span className="loading loading-dots  "></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
