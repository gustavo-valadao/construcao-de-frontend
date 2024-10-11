import { createContext, useState } from "react";

//Definição do Contexto. Informação que será usada globalmente pela aplicação.
const TarefaContext = createContext();

function TarefaProvider(props) {

    //Note que o estado é declarado dentro da função
    const [tarefas, setTarefas] = useState(["Estudar React", "Fazer a prática"]);

    // "..." pega todas as tarefas, adiciona a nova "tarefa". "setTarefa" atualiza o estado. 
    // Ou seja, ele adicionou a nova tarefa
    const incluir = (tarefa) => {
        setTarefas([...tarefas, tarefa]);
    };

    // A ação de remover percorre deixa todos os itens que não é a tarefa indicada.
    // Ou seja, ele retirou a tarefa.
    const remover = (tarefa) => {
        setTarefas(tarefas.filter((item) => item != tarefa))
    }

    //o contexto tem as tarefas, a ação de inclusão e a ação de remoção, declaradas anteriormente.
    const contexto = { tarefas, incluir, remover }

    return  (
        <TarefaContext.Provider value={contexto}>
            {props.children}
        </TarefaContext.Provider>
    )
}

export { TarefaContext, TarefaProvider };