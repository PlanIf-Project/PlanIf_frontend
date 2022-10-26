import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cadastro from './cadastro';
import Login from './login';

const App = () => {

  return (
   <Routes>
     <Route path="/" element={<Cadastro/>}/>
     <Route path="/login" element={<Login/>}/>
   </Routes>
  )
}

export default App;
