import { createContext, useState } from "react";
import { autenticar, cadastrar } from "../services/AuthService"

const AuthContext = createContext();

function AuthProvider(props) {
    
    const [usuario, setUsuario] = useState({
        email: null,
        logado: false,
        token: null
    });



    const login = async (dados) => {
        const resposta = await autenticar(dados);
        if (resposta.sucesso) {
            setUsuario({
                email: resposta.dados.user.email, 
                logado: true, 
                token: resposta.dados.acessToken,
            });
            return ""
        } else {
            return resposta.mensagem
        }
    }

    const logout = () => {
        setUsuario ({
            email: null,
            logado: false,
            token: null
        })
    }

    const registrar = async (dados) => {
        
        const resposta = await cadastrar(dados);

        if(resposta. sucesso) {
            setUsuario ({
                email: resposta.dados.user.email, 
                logado: true, 
                token: resposta.dados.acessToken,
            })
            return "";
        } else {
            return resposta.mensagem;
        }
    }
    
    const context = { usuario, login, logout, registrar };

    return (
        <>
            <AuthContext.Provider value={context}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
}

export {AuthContext, AuthProvider}