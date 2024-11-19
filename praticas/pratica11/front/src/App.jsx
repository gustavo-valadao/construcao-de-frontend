import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Erro404 from "./pages/Erro404"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Perfil from "./pages/Perfil"
import Registrar from "./pages/Registrar"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registrar" element={<Registrar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/perfil/:id" element={<Perfil/>}/>
          <Route path="*" element={<Erro404/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
