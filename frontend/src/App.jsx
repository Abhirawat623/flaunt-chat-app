
import { Fragment } from 'react'
import {Home,Login,Signup} from "./pages/index";
import {Routes,Route,Navigate} from "react-router-dom";
import { useAuthContext } from './context/AuthContext';
import './App.css'

function App() {
//context
const {authUser}=useAuthContext();
  return (
    
   <Fragment>
<Routes>
  <Route path="/" element={authUser ? <Home/> :<Navigate to="/login"/>}/>
  <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login/>}/>
  <Route path="/signup" element={authUser ? <Navigate to="/login"/> : <Signup/>}/>
</Routes>
   </Fragment>  )
}

export default App
