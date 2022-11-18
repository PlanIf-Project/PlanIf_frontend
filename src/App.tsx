import { Route, Routes } from 'react-router-dom'
import Cadastro from './pages/usuario/cadastro';
import Editar from './pages/usuario/editar';
import Excluir from './pages/usuario/excluir';
import Login from './pages/usuario/login';
import Perfil from './pages/usuario/perfil';
import Teste from './pages/usuario/teste';

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
