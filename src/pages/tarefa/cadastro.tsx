import "../../styles/styles.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CadastroTarefa = (props: any) => {
    const [name, setName] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();

    const cadastro = () => { 
       if(valid(name) && valid(data) && valid(descricao)) {
           let obj = {nome: name, data: data, descricao: descricao};
         
           axios.post('http://localhost:4000/tarefas/criarTarefa', obj).then(response => {
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
                            <input className="input" placeholder="Nome" type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div>
                            <input className="input" placeholder="Data" type="text" value={data} onChange={(e)=> setData(e.target.value)}/>
                        </div>
                        <div>
                            <input className="input" placeholder="Descrição" type="text" value={descricao} onChange={(e)=> setDescricao(e.target.value)}/>
                        </div>    
                    </form> 
                </div>
                <div className="botoes">
                    <div className="button">
                        <button className="botao" onClick={() => navigate("/tarefas")}> Cancelar </button>
                        <button className="botao" onClick={cadastro}> Cadastrar </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CadastroTarefa;
