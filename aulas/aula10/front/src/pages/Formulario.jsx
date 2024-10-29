import { useForm } from 'react-hook-form'
import InputNome from '../components/InputNome';
import InputTelefone from '../components/InputTelefone';

function Formulario (props) {

    const { 
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({values: props.dados});  //Values permite que o formulario receba os dados como props. 
                                         //Em novo contato, dados é vazio. Ao editar contato, recupera o dado do contato.

    return (
        <>
            <form onSubmit={handleSubmit(props.trataEnviar)}>
                <InputNome register={register} error={errors.nome}/>
                <InputTelefone register={register} error={errors.telefone}/>
                <button type='submit'>Salvar</button>
            </form>
        </>
    );
}

export default Formulario;