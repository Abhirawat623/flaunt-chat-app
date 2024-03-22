
import { Fragment } from 'react'
import {Home,Login,Signup} from "./pages/index";
import {Routes,Route} from "react-router-dom"
import './App.css'

function App() {

  return (
    
   <Fragment>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
</Routes>
   </Fragment>  )
}

export default App
