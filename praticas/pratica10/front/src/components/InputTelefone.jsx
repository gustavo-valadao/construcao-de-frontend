function InputTelefone(props) {
    
    const regras = {
        required: "Telefone é obrigatório!"
    }

    return (
        <>
            <label htmlFor="telefone">Telefone: </label>
            <input type="text" {...props.register("telefone", regras)} />
            {props.error && <p>{props.error.message}</p>}
        </>
    );
}

export default InputTelefone;