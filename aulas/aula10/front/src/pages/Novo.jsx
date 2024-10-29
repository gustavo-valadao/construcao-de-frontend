import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import { adicionar } from "../services/ContatoService"
import Formulario from "./Formulario";

function Novo () {

    const [erro, setErro] = useState("")
    const navigate = useNavigate();

    const onSalvar = async (data) => {
        const resultado = await adicionar(data);
        if (resultado.sucesso) {
            setErro("")
            navigate("/");
        } else {
            setErro(`Deu ruim! ${resultado.mensagem}`);
        }
    }

    return (
        <>
            <Cabecalho/>            
            <Conteudo>
                {erro && <p>{erro}</p>}
                <h2>Novo contato</h2>
                <Formulario dados={{}} trataEnviar={onSalvar}/>
            </Conteudo>


            
        </>
    );
}

export default Novo;