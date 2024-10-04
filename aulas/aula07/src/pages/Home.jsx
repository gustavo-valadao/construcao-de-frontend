import {useEffect, useState} from 'react'
import Menu from "../components/Menu";

function Home() {

    const [carregando, setCarregando] = useState(true);

    /*Use effect vai fazer o controle do efeito enquanto carrega*/
    useEffect(() => {
        const timeout = setTimeout(() => {
            //Aqui estaria carregando dados. Como está vazio, está esperando apenas 5 segundos. Depois disso, tira o estado "Carregando"
            setCarregando(false);
        }, 5000);
        
        // Após os 5 segundos, ele limpa o timeout 
        return () => clearTimeout(timeout);
    }, []);

    
    return (
        <>
            <header>
                <h1>Página Inicial</h1>
            </header>

            <main>
                <Menu/>
                <section>
                    <h2>Página Inicial</h2>

                    {carregando 
                        ? (<h3>Aguarde...</h3>)    /*Se estado carregando é verdade, mostre aguarde. Caso contrário, mostre a div */
                        : (<div className="card-grid"> 
                            <article>
                                <h3>Mural de Avisos</h3>
                                <ul>
                                    <li></li>
                                </ul>
                            </article>
                            <article>
                                <h3>Agenda Acadêmica</h3>
                                <ul>
                                    <li></li>
                                </ul>
                            </article>
                            <article>
                                <h3>Histórico de Notas</h3>
                                <ul>
                                    <li></li>
                                </ul>
                            </article>
                            <article>
                                <h3>Histórico de Faltas</h3>
                                <ul>
                                    <li></li>
                                </ul>
                            </article>
                        </div>)
                    }
                </section>
            </main>
        </>
    );
}

export default Home;
