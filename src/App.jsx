import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from './pages/login';
import Categorias from './pages/Categorias';
import RegisterUsuario from './pages/RegisterUsuario';
import RegisterNegocio from './pages/RegisterNegocio';
import NavDashboard from "./Components/NavDashboard";
import PaginaIniciar from './components/PaginaIniciar';
import Comida from './pages/Comida';
import Ropa from './pages/Ropa';
import Artesanias from './pages/Artesanias';
import Tiendas from './pages/Tiendas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaIniciar />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/dashboard" element={<NavDashboard />} />
      <Route path="/Categorias" element={<Categorias />} />
      <Route path="/registerUsuario" element={<RegisterUsuario />} />
      <Route path="/registerNegocio" element={<RegisterNegocio />} />
      <Route path="/Comida" element={<Comida />} />
      <Route path="/Ropa" element={<Ropa />} />
      <Route path="/Artesanias" element={<Artesanias />} />
      <Route path="/Tiendas" element={<Tiendas />} />
    </Routes>
  )
}

export default App;
