function InputSenha(props) {
    
    const regras = {
        required: {value: true, message: "A senha é obrigatória" },
        minLength: {value: 6, message: "A senha deve ter pelo menos 6 caracteres"}
    };

    return (
        <>
            <label htmlFor="senha">Senha: </label>
            <input type="password" {...props.register("senha", regras)} />
            {props.error && <p>{props.error.message}</p>}
        </>
    );
}

export default InputSenha;