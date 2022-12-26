import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const DetalhesTarefa = (props: any) => {
    const params = useParams();
    const [tarefa, setTarefa] = useState({id:'', nome:'', data:'', descricao: '', feito: false});
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
        navigate(`/tarefas/editar/${tarefa.id}`);
     }

    const excluir = () => { 
        navigate(`/tarefas/excluir/${tarefa.id}`);
    }
    
    const voltar = () => {
        navigate(`/tarefas`);
    }
        
    return (
        <div className="page">
            <div className="box">
            { 
                (tarefa.feito == true) ?
                <>
                    <div style={{ textDecorationLine: 'line-through' }}>
                        <div>
                            <span id="basic-addon1">Nome: </span>
                            <span aria-label="Nome" aria-describedby="basic-addon1">{tarefa.nome}</span>
                        </div>
                        <div>
                        { tarefa.data != '' ? <>
                            <span id="basic-addon1">Data: </span>
                            <span aria-label="Data" aria-describedby="basic-addon1"> {moment(tarefa.data).format('DD/MM/YYYY')} </span>
                            </> 
                            : null 
                        }
                        </div>
                        <div>
                            <span id="basic-addon1">Descrição: </span>
                            <span aria-label="Descricao" aria-describedby="basic-addon1">{tarefa.descricao}</span>
                        </div>
                        <div>
                            <button className="botao" id="basic-addon1" onClick={editar}>Editar</button>
                            <button className="botao" id="basic-addon1" onClick={excluir}>Excluir</button>
                        </div>       
                    </div>
                </> 
                : 
                <>
                    <div>
                        <div>
                            <span id="basic-addon1">Nome: </span>
                            <span aria-label="Nome" aria-describedby="basic-addon1">{tarefa.nome}</span>
                         </div>
                        <div>
                            { tarefa.data != '' ? <>
                                <span id="basic-addon1">Data: </span>
                                <span aria-label="Data" aria-describedby="basic-addon1"> {moment(tarefa.data).format('DD/MM/YYYY')} </span>
                                </> 
                                : null 
                            }
                        </div>
                        <div>
                            <span id="basic-addon1">Descrição: </span>
                            <span aria-label="Descricao" aria-describedby="basic-addon1">{tarefa.descricao}</span>
                        </div>
                        <div>
                            <button className="botao" id="basic-addon1" onClick={editar}>Editar</button>
                            <button className="botao" id="basic-addon1" onClick={excluir}>Excluir</button>
                        </div>
                    </div>
                    </>
                            }
                <button className="botao" id="basic-addon1" onClick={voltar}>Voltar</button>
            </div>
        </div>
    )
};

export default DetalhesTarefa;
