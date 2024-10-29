import axios from "axios"

const url = import.meta.env.VITE_API_URL;


function buscarTodos(){
    return axios
    .get(url)
    .then((response) => {return { sucesso: true, dados: response.data}})
    .catch((error) => {return { sucesso: false, mensagem: error.message}})
}

function buscar(id) {
    return axios
    .get(`${url}/${id}`)
    .then((response) => {return {sucesso: true, dados: response.data }})
    .catch((error) => {return { sucesso: false, mensagem: error.message}});

}

function adicionar(contato) {
    return axios
    .post(url, contato)
    .then((response) =>  { return {sucesso: true, dados: response.data}})  //sucesso dados
    .catch((error) => { return {sucesso: false, mensagem: error.message}}) //erro
}


function atualizar(contato) {
    return axios
    .put(`${url}/${contato.id}`, {nome: contato.nome, telefone: contato.telefone})
    .then((response) => {return {sucesso: true, dados: response. data}})
    .catch((error) => {return {sucesso: false, dados: error.message}})
}

function remover(id) {
    return axios
    .delete(`${url}/${id}`)  // exemplo http://localhost:3000/contatos/1a2b
    .then((response) => { return {sucesso: true, dados: response.data}})
    .catch((error) => { return { sucesso: false, mensagem: error.message}})

}

export {buscarTodos, buscar, adicionar, atualizar, remover}