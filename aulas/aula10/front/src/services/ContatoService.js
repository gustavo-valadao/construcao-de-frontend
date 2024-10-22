import axios from "axios"

const url = import.meta.env.API_URL;


function buscarTodos(){


}

function buscar(id) {

}

function adicionar(contato) {
    return axios
    .post(url, contato)
    .then((response) =>  { return {sucesso: true, dados: response.data}})  //sucesso dados
    .catch((error) => { return {sucesso: false, mensagem: error.message}}) //erro
}


function atualizar(contato) {

}

function remover(id) {

}

export {buscarTodos, buscar, adicionar, atualizar, remover}