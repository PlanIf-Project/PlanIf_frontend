import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cadastro from './cadastro';
import Login from './login';
import Perfil from './perfil';
import Teste from './teste';

const App = () => {

  return (
   <Routes>
     <Route path="/" element={<Cadastro/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/perfil/:id" element={<Perfil/>}/>
     <Route path="/teste" element={<Teste/>}/>
   </Routes>
  )
}

export default App;
