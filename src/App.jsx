import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from './pages/login';
import Categorias from './pages/Categorias';
import RegisterUsuario from './pages/RegisterUsuario';
import RegisterNegocio from './pages/RegisterNegocio';
import Perfil from './pages/Perfil';
import PaginaIniciar from './components/PaginaIniciar';
import Comida from './pages/Comida';
import Ropa from './pages/Ropa';
import Artesanias from './pages/Artesanias';
import Tiendas from './pages/Tiendas';
import Ajustes from './pages/Ajustes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaIniciar />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/Categorias" element={<Categorias />} />
      <Route path="/registerUsuario" element={<RegisterUsuario />} />
      <Route path="/registerNegocio" element={<RegisterNegocio />} />
      <Route path="/Comida" element={<Comida />} />
      <Route path="/Ropa" element={<Ropa />} />
      <Route path="/Artesanias" element={<Artesanias />} />
      <Route path="/Tiendas" element={<Tiendas />} />
      <Route path="/Ajustes" element={<Ajustes />} />
    </Routes>
  )
}

export default App;
