import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ExcluirDisciplina = (props: any) => {
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
          }
        ).catch(() => {navigate(`/login`);});
    }, [])
  
      const excluir = () => { 
        axios.delete(`http://localhost:4000/disciplinas/excluirDisciplina/${params.id}`, { headers: {'x-access-token':localStorage.getItem('token')!}})
        .then(response => {
            if(response.status == 204 || response.status == 200 ) {
                navigate(`/disciplinas`);
            }
        }).catch(error => {
            if(error.response.status == 400) {
                console.error(error.response.data);
            }
            else if(error.response.status == 500) {
                console.error("Problema no servidor!"); 
            }
        });
     }

    return (
        <div className="page">
             <div className="box">
                <div>
                    <span id="basic-addon1">Nome:        </span>
                    <input className="input" placeholder="Nome" type="text" value={disciplina.nome} disabled/>
                </div>
                <div>
                    <span id="basic-addon1">Descrição:      </span>
                    <input className="input" placeholder="Descrição" type="text" value={disciplina.descricao} disabled/>
                </div>
                <div>
                    <button className="botao" id="basic-addon1" onClick={() => navigate(`/disciplinas`)}> Voltar </button>
                    <button className="botao exluir" id="basic-addon1" onClick={excluir}> Excluir </button>
                </div>       
            </div>
        </div>
  )
};

export default ExcluirDisciplina;