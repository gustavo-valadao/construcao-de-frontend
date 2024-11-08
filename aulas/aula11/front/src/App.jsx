import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Erro404 from './pages/Erro404';

import { AuthContext } from './contexts/AuthContext';

function App() {

  const { usuario } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
            {usuario.logado 
              ? (
                <>
                  <Route path="/home" element={<Home/>}></Route>
                  <Route path="/perfil" element={<Perfil/>}></Route>
                </>
              )
              : (
                <>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/registrar" element={<Registrar/>}></Route>
                </>
              )
            } 
            <Route path="*" element={<Erro404/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
