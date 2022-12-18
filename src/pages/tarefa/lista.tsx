import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListaTarefas = (props: any) => {
    const [tarefas, setTarefas] = useState([{id:'', nome:'', data:'', descricao: ''}]);
    const navigate = useNavigate();

    let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);
    
    useEffect(() => {
        fetch(`http://localhost:4000/tarefas/listarTarefas`, { mode:'cors', headers: myHeaders})
            .then((res) => res.json()) 
            .then((data) => {
                setTarefas(data);
            })
            .catch(() => {
                navigate(`/tarefas`);
            });
        }, 
    []);
      
    const editar = (id: number) => { 
        navigate(`/tarefa/editar/${id}`);
     }

    const excluir = (id: number) => { 
        navigate(`/tarefa/excluir/${id}`);
    }

    return (
        <div className="page">
            <>
                { 
                    !!tarefas && tarefas.forEach((tarefa:any) => {
                        <div className="box" key={tarefa.id}>
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
                                <span aria-label="Descrição" aria-describedby="basic-addon1">{tarefa.descricao}</span>
                            </div>
                            <div>
                                <button className="botao" id="basic-addon1" onClick={() => editar(tarefa.id)}>Editar</button>
                                <button className="botao" id="basic-addon1" onClick={() => excluir(tarefa.id)}>Excluir</button>
                            </div>       
                            <br></br><br></br>
                    </div>
                    })
                };
            </>
        </div>
    );
};

export default ListaTarefas;
