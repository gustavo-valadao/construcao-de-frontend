import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";

function Novo () {
    return (
        <>
            <Cabecalho/>            
            <Conteudo>
                <h2>Novo contato</h2>
                <Formulario trataEnviar={() => {}}/>
            </Conteudo>
        </>
    );
}

export default Novo;