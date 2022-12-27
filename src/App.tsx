import { Route, Routes } from 'react-router-dom'
import CadastroUsuario from './pages/usuario/cadastro';
import Login from './pages/usuario/login';
import Perfil from './pages/usuario/perfil';
import EditarUsuario from './pages/usuario/editar';
import ExcluirUsuario from './pages/usuario/excluir';
import ListaUsuario from './pages/usuario/lista';
import CadastroTarefa from './pages/tarefa/cadastro';
import DetalhesTarefa from './pages/tarefa/datalhes';
import EditarTarefa from './pages/tarefa/editar';
import ExcluirTarefa from './pages/tarefa/excluir';
import ListaTarefas from './pages/tarefa/lista';
import CadastroDisciplina from './pages/disciplina/cadastro';
import ListaDisciplinas from './pages/disciplina/lista';
import DetalhesDisciplina from './pages/disciplina/datalhes';
import EditarDisciplina from './pages/disciplina/editar';
import ExcluirDisciplina from './pages/disciplina/excluir';

const App = () => {

  return (
    <Routes>
      {/* USUÁRIO */}
      <Route path="/" element={<CadastroUsuario/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/perfil/:id" element={<Perfil/>}/>
      <Route path="/perfil/editar/:id" element={<EditarUsuario/>}/>
      <Route path="/perfil/excluir/:id" element={<ExcluirUsuario/>}/>
      <Route path="/teste" element={<ListaUsuario/>}/>

      {/* TAREFA*/}
      <Route path="/tarefas" element={<ListaTarefas/>}/>
      <Route path="/tarefas/cadastro" element={<CadastroTarefa/>}/>
      <Route path="/tarefas/detalhes/:id" element={<DetalhesTarefa/>}/>
      <Route path="/tarefas/editar/:id" element={<EditarTarefa/>}/>
      <Route path="/tarefas/excluir/:id" element={<ExcluirTarefa/>}/>

      {/* TAREFA*/}
      <Route path="/disciplinas" element={<ListaDisciplinas/>}/>
      <Route path="/disciplinas/cadastro" element={<CadastroDisciplina/>}/>
      <Route path="/disciplinas/detalhes/:id" element={<DetalhesDisciplina/>}/>
      <Route path="/disciplinas/editar/:id" element={<EditarDisciplina/>}/>
      <Route path="/disciplinas/excluir/:id" element={<ExcluirDisciplina/>}/>
    </Routes>
  )
}

export default App;
