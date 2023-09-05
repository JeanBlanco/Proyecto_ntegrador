import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from './pages/login';
import RegisterUsuario from './pages/RegisterUsuario';
import NavDashboard from "./Components/NavDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<NavDashboard />} />
      <Route path="/registerUsuario" element={<RegisterUsuario />} />
    </Routes>
  )
}

export default App;
