import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Perfil = (props: any) => {
    const params = useParams();
    const [user, setUser] = useState({id:'', nome:'', email:'', senha: '', token: ''});
    const navigate = useNavigate();

    let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);
    
    useEffect(() => {
        fetch(`http://localhost:4000/usuarios/verUsuario/${params.id}`, { mode:'cors', headers: myHeaders})
            .then((res) => res.json()) 
            .then((data) => {
                setUser(data);
            })
            .catch(() => {
                navigate(`/login`);
            });
        }, 
    []);
  
    const editar = () => { 
        navigate(`/perfil/editar/${user.id}`);
     }

    const excluir = () => { 
        navigate(`/perfil/excluir/${user.id}`);
    }
    
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('idUsuario');
        navigate(`/login`);
    }
    const listaTarefas = () => {
        navigate(`/tarefas`)
    }

    const listaDisciplinas = () => {
        navigate(`/disciplinas`)
    }
        
    return (
        <div className="page">
            <div className="box">
                <div>
                    <span id="basic-addon1">Nome: </span>
                    <span aria-label="Nome" aria-describedby="basic-addon1">{user.nome}</span>
                </div>
                <div>
                    <span id="basic-addon1">Email: </span>
                    <span aria-label="Email" aria-describedby="basic-addon1">{user.email}</span>
                </div>
                <div>
                    <button className="botao" id="basic-addon1" onClick={editar}>Editar</button>
                    <button className="botao" id="basic-addon1" onClick={excluir}>Excluir</button>
                </div>
                <br></br><br></br>
                <button className="botao" id="basic-addon1" onClick={listaTarefas}> Lista de Tarefas</button>
                <br></br><br></br>
                <button className="botao" id="basic-addon1" onClick={listaDisciplinas}> Lista de Disciplinas</button>
                <br></br><br></br>
                <button className="botao" id="basic-addon1" onClick={logout}>Sair</button>
            </div>
        </div>
    )
};

export default Perfil;
