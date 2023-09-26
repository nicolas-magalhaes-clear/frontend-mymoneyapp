import { Route, Routes } from "react-router-dom";
import Layout from "./templates/Layout";
import CicloPagamentos from "./pages/Cadastro/CicloPagamentos";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Layout>
        
    <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/cadastro/ciclopagamentos" element={<CicloPagamentos/>}/>
    </Routes>
    </Layout>
  )
}