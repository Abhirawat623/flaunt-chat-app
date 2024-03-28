import { Welcome } from "../components/welcome/Welcome"
import {Toaster} from "react-hot-toast"
export const Home =()=>{
    return(
        <div className='flex justify-center items-center rounded-lg overflow-hidden bg-gray-400  backdrop-filter
        w-screen backdrop-blur-lg bg-opacity-0'>
       <Welcome/>
       <Toaster/>
    </div>
    )
}