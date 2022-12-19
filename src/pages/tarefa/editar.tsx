import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditarTarefa = (props: any) => {
    const params = useParams();
    const [tarefa, setTarefa] = useState({id:'', nome:'', data:'', descricao: ''});
    const navigate = useNavigate();
    
    let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);

    useEffect(() => {
        fetch(`http://localhost:4000/tarefas/verTarefa/${params.id}`, { mode:'cors', headers: myHeaders})
            .then((res) => res.json())
            .then((data) => {
                setTarefa(data)
            })
            .catch((err) => {
                console.error(err)
            });
        }, 
    [])
  
    const editar = () => { 
        let obj = {id: tarefa.id, nome: tarefa.nome, data: tarefa.data, descricao: tarefa.descricao};
        axios.put('http://localhost:4000/tarefas/editarTarefa', obj, { headers: {'x-access-token':localStorage.getItem('token')!}})
            .then(response => {
                if(response.status == 204 || response.status == 200 ) {
                    navigate(`/tarefas`);
                }
            })
            .catch(error => {
                if(error.response.status == 400) {
                    console.error(error.response.data);
                }
                else if(error.response.status == 500) {
                    console.error("Problema no servidor!"); 
                }
            }
        );
    }

    return (
        <div className="page">
            <div className="box">
                <div>
                    <span id="basic-addon1">Nome:    </span>
                    <input className="input" placeholder="Nome" type="text" value={tarefa.nome} onChange={(e)=> setTarefa({id: tarefa.id, nome: e.target.value, data: tarefa.data, descricao: tarefa.descricao})}/>
                </div>
                <div>
                    <span id="basic-addon1"> Data:    </span>
                    <input className="input" placeholder="Data" type="text" value={tarefa.data} onChange={(e)=> setTarefa({id: tarefa.id, nome: tarefa.nome, data: e.target.value, descricao: tarefa.descricao})}/>
                    
                </div>
                <div>
                    <span id="basic-addon1"> Descrição:    </span>
                    <input className="input" placeholder="Descrição" type="text" value={tarefa.data} onChange={(e)=> setTarefa({id: tarefa.id, nome: tarefa.nome, data: tarefa.data, descricao: e.target.value})}/>
                    
                </div>
                <div>
                    <button className="botao" id="basic-addon1" onClick={() => navigate(`/tarefas`)}> Voltar </button>
                    <button className="botao" id="basic-addon1" onClick={editar}> Editar </button>
                </div>       
            </div>
        </div>
    )
};

export default EditarTarefa;
