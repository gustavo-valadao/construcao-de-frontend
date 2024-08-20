const root = document.getElementById("root");
//Essa função 


/* Componentes */ 
function Cabecalho() {
    const header = document.createElement("header");
    return header;
}

function Conteudo() {
    const main = document.createElement("main");
    return main;
}

function Rodape() {
    const footer = document.createElement("footer");
    return footer;
}

// Paginas
function PageLogin() {
    const conteudo = Conteudo();
    const rodape = Rodape();
    root.append(conteudo, rodape);
}

function PageHome() {
    const cabecalho = Cabecalho();
    const conteudo = Conteudo();
    root.append(cabecalho, conteudo);
}

PageLogin();