import { TarefaProvider } from "./contexts/TarefaContext";
import FormTarefa from "./pages/FormTarefa";
import ListTarefa from "./pages/ListTarefa";

function App() {

  //Para ter acesso ao contexto, o provedor precisa envolver toda a aplicação:
  return (
    <TarefaProvider>
      <h1>Lista de Tarefas:</h1>
      <FormTarefa/>
      <ListTarefa/>
    </TarefaProvider>
  )
}

export default App;