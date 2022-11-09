import { Route, Routes } from 'react-router-dom'
import Cadastro from './usuario/cadastro';
import Editar from './usuario/editar';
import Excluir from './usuario/excluir';
import Login from './usuario/login';
import Perfil from './usuario/perfil';
import Teste from './usuario/teste';

const App = () => {

  return (
   <Routes>
    {/* USUÁRIO */}
     <Route path="/" element={<Cadastro/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/perfil/:id" element={<Perfil/>}/>
     <Route path="/perfil/editar/:id" element={<Editar/>}/>
     <Route path="/perfil/excluir/:id" element={<Excluir/>}/>
     <Route path="/teste" element={<Teste/>}/>
   </Routes>
  )
}

export default App;
