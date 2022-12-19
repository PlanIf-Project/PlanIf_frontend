import { Route, Routes } from 'react-router-dom'
import CadastroTarefa from './pages/tarefa/cadastro';
import DetalhesTarefa from './pages/tarefa/datalhes';
import EditarTarefa from './pages/tarefa/editar';
import ExcluirTarefa from './pages/tarefa/excluir';
import ListaTarefas from './pages/tarefa/lista';
import Cadastro from './pages/usuario/cadastro';
import Editar from './pages/usuario/editar';
import Excluir from './pages/usuario/excluir';
import Login from './pages/usuario/login';
import Perfil from './pages/usuario/perfil';
import Index from './pages/usuario/lista';

const App = () => {

  return (
    <Routes>
      {/* USUÁRIO */}
      <Route path="/" element={<Cadastro/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/perfil/:id" element={<Perfil/>}/>
      <Route path="/perfil/editar/:id" element={<Editar/>}/>
      <Route path="/perfil/excluir/:id" element={<Excluir/>}/>
      <Route path="/teste" element={<Index/>}/>

      {/* TAREFA*/}
      <Route path="/tarefas" element={<ListaTarefas/>}/>
      <Route path="/tarefas/cadastro" element={<CadastroTarefa/>}/>
      <Route path="/tarefas/detalhes/:id" element={<DetalhesTarefa/>}/>
      <Route path="/tarefas/editar/:id" element={<EditarTarefa/>}/>
      <Route path="/tarefas/excluir/:id" element={<ExcluirTarefa/>}/>
    </Routes>
  )
}

export default App;
