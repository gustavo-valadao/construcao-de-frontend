import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";
import { atualizar, buscar } from "../services/ContatoService";

function Editar () {

    const { id } = useParams();
    const [contato, setContato] = useState ({});
    const [erro, setErro] = useState ("");
    const navigate = useNavigate();

    //useEffect não aceita uma chamada assíncrona diretamente.
    //Por isso declaramos a função assíncrona carregar, e o useEffect chama a função carregar.
    //useEffect é feito para disparar o buscar os dados (função carregar) após carregar a página.

    const carregar = async() => {
        const resultado = await buscar(id)
        if (resultado.sucesso) {
            setContato(resultado.dados)
            setErro("");
        } else {
            setContato({});
            setErro(resultado.mensagem);
        }

    }

    useEffect(() => {
        carregar(id)  
    }, []);

    const onSalvar = async(data) => {
        const resultado = await atualizar({id, ...data})
        if (resultado.sucesso) {
            navigate("/")
            setErro("")
        } else {
            setErro(resultado.mensagem)
        }
    }

    return (
        <>
            <Cabecalho/>
            <Conteudo>
                {erro && <p>{erro}</p>}
                <h2>Editar Contato</h2>
                <Formulario dados={contato}  trataEnviar={onSalvar} />
            </Conteudo>
        </>
    );
}

export default Editar;