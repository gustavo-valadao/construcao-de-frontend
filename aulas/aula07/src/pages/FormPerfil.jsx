import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputNome from "../components/InputNome";
import InputSenha from "../components/InputSenha";

function FormPerfil () {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <>
            <form onSubmit={handleSubmit((data) => {navigate("/perfil")})}>
                <InputNome register={register} error={errors.nome}/>
                <InputEmail register={register} error={errors.email}/>
                <InputSenha register={register} error={errors.senha}/>
                <Botao texto="Salvar"/>
            </form>
        </>
    )
}

export default FormPerfil;