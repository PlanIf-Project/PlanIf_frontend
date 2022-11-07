import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cadastro from './cadastro';
import Login from './login';
import Teste from './teste';

const App = () => {

  return (
   <Routes>
     <Route path="/" element={<Cadastro/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/teste" element={<Teste/>}/>
   </Routes>
  )
}

export default App;
