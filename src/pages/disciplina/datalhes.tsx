import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const DetalhesDisciplina = (props: any) => {
    const params = useParams();
    const [disciplina, setDisciplina] = useState({id:'', nome:'', descricao: ''});
    const navigate = useNavigate();

    let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);
    
    useEffect(() => {
        fetch(`http://localhost:4000/disciplinas/verDisciplina/${params.id}`, { mode:'cors', headers: myHeaders})
            .then((res) => res.json()) 
            .then((data) => {
                setDisciplina(data);
            })
            .catch(() => {
                navigate(`/disciplinas`);
            });
        }, 
    []);
  
    const editar = () => { 
        navigate(`/disciplinas/editar/${disciplina.id}`);
     }

    const excluir = () => { 
        navigate(`/disciplinas/excluir/${disciplina.id}`);
    }
    
    const voltar = () => {
        navigate(`/disciplinas`);
    }
        
    return (
        <div className="page">
            <div className="box">
                <div>
                    <div>
                        <span id="basic-addon1">Nome: </span>
                        <span aria-label="Nome" aria-describedby="basic-addon1">{disciplina.nome}</span>
                    </div>
                    <div>
                        <span id="basic-addon1">Descrição: </span>
                        <span aria-label="Descricao" aria-describedby="basic-addon1">{disciplina.descricao}</span>
                    </div>
                    <div>
                        <button className="botao" id="basic-addon1" onClick={editar}>Editar</button>
                        <button className="botao" id="basic-addon1" onClick={excluir}>Excluir</button>
                    </div>
                </div>
                <button className="botao" id="basic-addon1" onClick={voltar}>Voltar</button>
            </div>
        </div>
    )
};

export default DetalhesDisciplina;
