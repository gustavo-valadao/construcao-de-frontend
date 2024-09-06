import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Link from "../components/Link";
import Logo from "../components/Logo";
import Rodape from "../components/Rodape";
import Titulo from "../components/Titulo";
import Conteudo from "../components/Conteudo";

function Login() {
    return (
        <>
            
            <Conteudo>
                <Logo imagem="https://www.svgrepo.com/show/520490/student.svg" texto="Logo da aplicação"/>
                <Titulo texto="Aluno Online"/>
                <InputEmail/>
                <InputSenha/>
                <Botao texto="Entrar"/>
                <Link texto="Esqueceu a Senha?"/>
            </Conteudo>
            
            <Rodape/>
        </>
    );
}

export default Login;