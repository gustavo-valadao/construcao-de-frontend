import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Formulario from "./Formulario";

function Login() {

    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const onEntrar = async (data) => {
        const resultado = await login(data);

        if (resultado) {
            setErro(resultado);
        } else {
            setErro("");
            navigate("/home")
        }
    }
    


    return (
        <>
            <h1>Login</h1>
            {erro && <p>{erro}</p>}
            <Formulario onEnviar={onEntrar} texto="Entrar" />
            <Link to="/registrar">Registrar</Link>



        </>
    )
}

export default Login;