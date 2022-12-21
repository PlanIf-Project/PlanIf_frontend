import "../../styles/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListaTarefas = (props: any) => {
    const [tarefas, setTarefas] = useState([{id:'', nome:'', data:'', descricao: '', feito: false, idUsuario: ''}]);
    const [carregando, setCarregando] = useState(true);
    const navigate = useNavigate();

    let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);
    
    useEffect(() => {
        fetch(`http://localhost:4000/tarefas/listarTarefas/${localStorage.getItem('idUsuario')!}`, { mode:'cors', headers: myHeaders})
            .then((res) => res.json()) 
            .then((data) => {
                setTarefas(data);
                setCarregando(false);
            })
            .catch((err) => {
                navigate(`/login`);
                setCarregando(false);
            });
        }, 
    [tarefas]);
      
    const editar = (id: number) => { 
        navigate(`/tarefas/editar/${id}`);
     }

    const excluir = (id: number) => { 
        navigate(`/tarefas/excluir/${id}`);
    }

    const cadastrar = () => {
        navigate(`/tarefas/cadastro`)
    }
    const detalhar = (id: number) => {
        navigate(`/tarefas/detalhes/${id}`)
    }

    const handleChecked = (e: any, tarefa: any) => {
        let obj = {id: tarefa.id, nome: tarefa.nome, data: tarefa.data, descricao: tarefa.descricao, feito: !(tarefa.feito)};
        axios.put('http://localhost:4000/tarefas/editarTarefa', obj, { headers: {'x-access-token':localStorage.getItem('token')!}})
            .then(response => {
                if(response.status == 204 || response.status == 200 ) {
                    navigate(`/tarefas`);
                }
            })
            .catch(error => {
                console.log(error)
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
                <button className="botao" id="basic-addon1" onClick={() => navigate(`/perfil/${localStorage.getItem('idUsuario')!}`)}> Perfil </button>
                <button className="botao" id="basic-addon1" onClick={cadastrar}> Cadastrar nova tarefa </button>
                
                {
                carregando ? null :
                    <div>
                        {
                            tarefas.map((tarefa:any) => 
                                <div key={tarefa.id}>
                                    <input type={"checkbox"} checked={tarefa.feito} onChange={(e) => handleChecked(e, tarefa)}/>
                                    <div onClick={() => detalhar(tarefa.id)}>
                                    <div >
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
                                    </div>
                                    <div>
                                        <button className="botao" id="basic-addon1" onClick={() => editar(tarefa.id)}>Editar</button>
                                        <button className="botao" id="basic-addon1" onClick={() => excluir(tarefa.id)}>Excluir</button>
                                    </div>       
                                    <br></br>
                                </div>
                            )
                        }
                    </div> 
                }
            </div>
        </div>
    );
};

export default ListaTarefas;