import { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import { buscarTodos, remover } from "../services/ContatoService";
import Listagem from "./Listagem";

function Listar () {

    const [contatos, setContatos] = useState([]);  //Estado para armazenar os contatos listados
    const [erro, setErro] = useState();            //Estado para armazenar a mensagem de erro, se não conseguir trazer os contatos listados

    const carregar = async () => {    //O useEffect não aceita receber uma função assíncrona diretamente. Por isso é colocada uma função dentro da outra.
        const resultado = await buscarTodos();

        if (resultado.sucesso) {
            setContatos(resultado.dados);
            setErro("");
        } else {
            setContatos([]);
            setErro(resultado.mensagem);
        }
    }

    const onRemover = async (id) => {
        const resultado = await remover(id);
        if (resultado.sucesso) { 
            await carregar(); //quando remover, carregar de novo a lista
        } else {
            setErro(resultado.mensagem);
        }
    }

    useEffect(() => {    //useEffect faz ele carregar os contatos depois de carregar página
        carregar();
    }, [])

    return (
        <>
            <Cabecalho/>
            <Conteudo>
                {erro && <p>{erro}</p>}
                <h2>Lista de Contatos</h2>
                <Listagem itens={contatos} onRemover={onRemover}/>
            </Conteudo>
        </>
    );
}

export default Listar;