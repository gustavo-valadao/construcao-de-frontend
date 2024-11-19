import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Formulario from "./Formulario";


function Registrar() {

    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const {login, signup} = useContext(AuthContext);

    const onConfirmar = async (data) => {
        const resultado = await signup(data);

        if (resultado) {
            setErro(resultado);
          } else {
            setErro("");
            navigate("/home");
          }
          
    }
    


 
    return (
        <>
            <h1>Registrar</h1>
            {erro && <p>{erro}</p>}
            <Formulario onEnviar={onConfirmar} texto="Confirmar" />
            <Link to="/login">Voltar</Link>


        </>
    )
}

export default Registrar;