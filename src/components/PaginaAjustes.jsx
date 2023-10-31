import { useNavigate } from "react-router-dom";

function PaginaAjustes() {
    const navigate = useNavigate();
    const goToAjustes = () => {
      navigate("/Ajustes");
    };
    
    return (
        <div>
            <h1>Ajustes</h1>
        </div>
  )
  };
    
  export default PaginaAjustes