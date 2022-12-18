import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetalhesTarefa = (props: any) => {
    const params = useParams();
    const [tarefa, setTarefa] = useState({id:'', nome:'', data:'', descricao: ''});
    const navigate = useNavigate();

    let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);
    
    useEffect(() => {
        fetch(`http://localhost:4000/tarefas/verTarefa/${params.id}`, { mode:'cors', headers: myHeaders})
            .then((res) => res.json()) 
            .then((data) => {
                setTarefa(data);
            })
            .catch(() => {
                navigate(`/tarefas`);
            });
        }, 
    []);
  
    const editar = () => { 
        navigate(`/tarefa/editar/${tarefa.id}`);
     }

    const excluir = () => { 
        navigate(`/tarefa/excluir/${tarefa.id}`);
    }
    
    const voltar = () => {
        navigate(`/tarefas`);
    }
        
    return (
        <div className="page">
            <div className="box">
                <div>
                    <span id="basic-addon1">Nome: </span>
                    <span aria-label="Nome" aria-describedby="basic-addon1">{tarefa.nome}</span>
                </div>
                <div>
                    <span id="basic-addon1">Data: </span>
                    <span aria-label="Data" aria-describedby="basic-addon1">{tarefa.data}</span>
                </div>
                <div>
                    <span id="basic-addon1">Descrição: </span>
                    <span aria-label="Descricao" aria-describedby="basic-addon1">{tarefa.descricao}</span>
                </div>
                <div>
                    <button className="botao" id="basic-addon1" onClick={editar}>Editar</button>
                    <button className="botao" id="basic-addon1" onClick={excluir}>Excluir</button>
                </div>       
                <br></br><br></br>
                <button className="botao" id="basic-addon1" onClick={voltar}>Voltar</button>
            </div>
            <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
        </div>
    )
};

export default DetalhesTarefa;
