import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login';

const App = () => {

  return (
   <Routes>
     <Route path="/" element={<Login/>}/>
   </Routes>
  )
}

export default App;
