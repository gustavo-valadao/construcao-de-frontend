import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import { buscarTodos, remover } from "../services/ContatoService";
import Listagem from "./Listagem";

function Listar() {

    const [contatos, setContatos] = useState([]);
    const [erro, setErro] = useState ("")

    const navigate = useNavigate();

    const trataAtualizar = (id) => {
        navigate(`/editar/${id}`)
    }

    const trataRemover = async (id) => {
        const resposta = await remover(id);
        if (resposta.sucesso) {
            carregar();
            setErro("");
        } else {
            setErro(resposta.mensagem);
        }
    }

    const carregar = async () => {
        const resposta = await buscarTodos();
       
        if (resposta.sucesso) {
            setContatos(resposta.dados)
        } else {
            setErro(resposta.mensagem)
        }
    }

    useEffect(() => {
        carregar()
    }, [])

    return (
        <>
            <Cabecalho/>
            <Conteudo>
                <h2>Lista de Contatos:</h2>
                <Listagem itens={contatos} trataAtualizar={trataAtualizar} trataRemover={trataRemover}/>
                {erro && <p>{erro}</p>}
            </Conteudo>
        </>
    );
}

export default Listar;