function InputEmail(props) {
    return (
        <>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" value={props.email} onChange={props.mudaValor} required></input>
        </>
    );
}

export default InputEmail;