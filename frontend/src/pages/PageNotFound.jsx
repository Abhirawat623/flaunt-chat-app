import { useNavigate } from "react-router-dom";
export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center h-screen w-screen ">
      <div className="text-center">
        <img
          src="https://i.ibb.co/tm3GfQB/404.png"
          alt="not_found"
          className="h-60 xl:h-80 mx-auto my-4 animate-pulse"
        />
        <h3 className="p-4 text-3xl xl:text-6xl my-4 font-semibold text-slate-800">
          How did you land here?
        </h3>
        <p className="text-2xl xl:text-3xl">You are not supposed to be here!</p>
        <button
          className="bg-slate-800 hover:bg-slate-300 text-white relative font-medium text-2xl rounded-lg  hover:text-white ease-in duration-150 text-center p-4 m-6"
          onClick={() => navigate(-1)}
        >
          Go Back!
        </button>
      </div>
    </section>
  );
};
