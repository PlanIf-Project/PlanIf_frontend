import "../../styles/styles.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CadastroTarefa = (props: any) => {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();

    const cadastro = () => { 
       if(valid(nome) && valid(data) && valid(descricao)) {
           let obj = {nome: nome, data: data, descricao: descricao, idUsuario: localStorage.getItem('idUsuario')!};
         
           axios.post('http://localhost:4000/tarefas/criarTarefa', obj, { headers: {'x-access-token':localStorage.getItem('token')!}} )
           .then(response => {
               if(response.status == 204 || response.status == 200 ) {
                   navigate(`/tarefas`);
                }
               
            }).catch(error => {
               console.error(error);
            });
        }
        else {
            console.error("Algum dado inserido está errado, verifique novamente");
        }
    }
    
    const valid = (value: string) => {
        if(value != null && value != undefined && value != '') {
            return true;
        }
        else {
            return false;
        }
    }
    
    return (
        <div className="page">
        <div className="box">
            <div className="form">
                <form onSubmit={(e) => {cadastro()}}>
                    <div>
                        <input className="input" placeholder="Nome" type="text" value={nome} onChange={(e)=> setNome(e.target.value)}/>
                    </div>
                    <div>
                        <input className="input" placeholder="Data" type="date" value={data} onChange={(e)=> setData(e.target.value)}/>
                    </div>
                    <div>
                        <input className="input" placeholder="Descrição" type="text" value={descricao} onChange={(e)=> setDescricao(e.target.value)}/>
                    </div>
                    </form> 
            </div>
            <div>
                <button className="botao" id="basic-addon1" onClick={() => navigate(`/tarefas`)}> Voltar </button>
                <button className="botao exluir" id="basic-addon1" onClick={cadastro}> Cadastrar </button>
            </div>
        </div>
    </div>
    )
};

export default CadastroTarefa;
