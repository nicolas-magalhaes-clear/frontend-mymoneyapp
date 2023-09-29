import { Route, Routes } from "react-router-dom";
import Layout from "./templates/Layout";
import CicloPagamentos from "./pages/Cadastro/CicloPagamentos";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserInfo } from "./store/actions/authSlice";

export default function App() {

  const userInfo = useSelector((state) => state.authSlice.data)
  const [loginStatus, setLoginStatus] = useState(false)
  
  
  
  
  
    
    if(userInfo !== null){
      return(<Layout>
        
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/cadastro/ciclopagamentos" element={<CicloPagamentos/>}/>
      </Routes>
      </Layout>)
    }else{
      return(<Login/>)
    }
  
  
}

// export default function App() {
//   return (
   
  
// }