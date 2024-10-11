// Importamos o uso do contexto, do react, e também o contexto de tarefas que criamos
import { useContext } from "react";
import { TarefaContext } from "../contexts/TarefaContext";

function ListTarefa() {

    //Vamos usar as tarefas, do TarefaContext
    //Vamos usar a função de remover tarefas
    const { tarefas, remover } = useContext(TarefaContext);

    return (
        <ul>
          {tarefas.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => remover(item)}>Remover</button>
            </li>
          ))}
        </ul>
    );
}

export default ListTarefa;