function InputSenha(props) {
    const regras = {
        required: "Senha é obrigatório",
        minLength: {
            value: 6,
            message: 'A senha precisa ter pelo menos 6 caracteres',
        }
    }

    return (
        <>
            <label htmlFor="senha">Email: </label>
            <input type="password" {...props.register("senha", regras)}/>
            {props.error && <p>{props.error.message}</p>}
        </>
    )
}

export default InputSenha