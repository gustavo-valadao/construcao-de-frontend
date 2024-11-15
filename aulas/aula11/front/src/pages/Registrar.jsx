import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import Formulario from "./Formulario";

function Registrar() {
    
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const { registrar } = useContext(AuthContext);

    const onSalvar = async (data) => {
        const erro = await registrar(data);
        if (!erro) {
            setMsg("");
            navigate("/home");
        } else {
            setMsg(erro);
        }
    };

    return (
        <>
            <h1>Registrar</h1>
            {msg && <p>{msg}</p>}
            <Formulario onEnviar={onSalvar} texto="Confirmar"/>
            <Link to="/login">Voltar</Link>
        </>
    );
}

export default Registrar;