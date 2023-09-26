import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from './pages/login';
import RegisterUsuario from './pages/RegisterUsuario';
import RegisterNegocio from './pages/RegisterNegocio';
import NavDashboard from "./Components/NavDashboard";
import PaginaIniciar from './components/PaginaIniciar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaIniciar />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/dashboard" element={<NavDashboard />} />
      <Route path="/registerUsuario" element={<RegisterUsuario />} />
      <Route path="/registerNegocio" element={<RegisterNegocio />} />
    </Routes>
  )
}

export default App;
