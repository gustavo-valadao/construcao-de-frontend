import axios from 'axios';

const url = 'http://localhost:3000'

function autenticar(usuario) {
    return axios
    .post(`${url}/login`, {
        email: usuario.email, 
        password: usuario.senha
    })
    .then((response) => {return {sucesso:true, dados: response.data}})
    .catch((error) => {
        if (error.response) {
            return {sucesso: false, mensagem: error.response.data}
        } else {
            return {sucesso: false, mensagem: "Falha na comunicação."}
        }
    });
}

function cadastrar(usuario) {
    return axios
    .post(`${url}/register`, {
        email: usuario.email, 
        password: usuario.senha
    })
    .then((response) => {return {sucesso:true, dados: response.data}})
    .catch((error) => {
        if (error.response) {
            return {sucesso: false, mensagem: error.response.data}
        } else {
            return {sucesso: false, mensagem: "Falha na comunicação."}
        }
    });
}

export { autenticar, cadastrar };