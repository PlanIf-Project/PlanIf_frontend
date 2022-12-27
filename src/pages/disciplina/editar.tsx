import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditarDisciplina = (props: any) => {
    const params = useParams();
    const [disciplina, setDisciplina] = useState({id:'', nome:'', descricao: ''});
    const navigate = useNavigate();
    
    let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);

    useEffect(() => {
        fetch(`http://localhost:4000/disciplinas/verDisciplina/${params.id}`, { mode:'cors', headers: myHeaders})
            .then((res) => res.json())
            .then((data) => {
                setDisciplina(data)
            })
            .catch((err) => {
                console.error(err)
            });
        }, 
    [])
  
    const editar = () => { 
        let obj = {id: disciplina.id, nome: disciplina.nome, descricao: disciplina.descricao};
        axios.put('http://localhost:4000/disciplinas/editarDisciplina', obj, { headers: {'x-access-token':localStorage.getItem('token')!}})
            .then(response => {
                if(response.status == 204 || response.status == 200 ) {
                    navigate(`/disciplinas`);
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
                    <input className="input" placeholder="Nome" type="text" value={disciplina.nome} onChange={(e)=> setDisciplina({id: disciplina.id, nome: e.target.value, descricao: disciplina.descricao})}/>
                </div>
                <div>
                    <span id="basic-addon1"> Descrição:    </span>
                    <input className="input" placeholder="Descrição" type="text" value={disciplina.descricao} onChange={(e)=> setDisciplina({id: disciplina.id, nome: disciplina.nome, descricao: e.target.value})}/>
                    
                </div>
                <div>
                    <button className="botao" id="basic-addon1" onClick={() => navigate(`/disciplinas`)}> Voltar </button>
                    <button className="botao" id="basic-addon1" onClick={editar}> Editar </button>
                </div>       
            </div>
        </div>
    )
};

export default EditarDisciplina;
