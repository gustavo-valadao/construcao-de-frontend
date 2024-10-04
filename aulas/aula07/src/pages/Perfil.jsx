import Menu from "../components/Menu";
import FormPerfil from "./FormPerfil";

function Perfil() {
    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>
            <main>
                <Menu/>     
                <section>
                    <h2>Perfil do Usuário</h2>
                    <FormPerfil />
                </section>
            </main>
        </>
    );
}

export default Perfil;
