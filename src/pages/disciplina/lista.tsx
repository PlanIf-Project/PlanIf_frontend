import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavBar from "../../components/navBar";

const ListaDisciplinas = (props: any) => {
    const [disciplinas, setDisciplinas] = useState([{id:'', nome:'', descricao: '', idUsuario: ''}]);
    const [carregando, setCarregando] = useState(true);
    const navigate = useNavigate();

    let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);
    
    useEffect(() => {
        fetch(`http://localhost:4000/disciplinas/listarDisciplinas/${localStorage.getItem('idUsuario')!}`, { mode:'cors', headers: myHeaders})
            .then((res) => res.json()) 
            .then((data) => {
                setDisciplinas(data);
                setCarregando(false);
            })
            .catch((err) => {
                navigate(`/login`);
                setCarregando(false);
            });
        }, 
    [disciplinas]);
      
    const editar = (id: number) => { 
        navigate(`/disciplinas/editar/${id}`);
     }

    const excluir = (id: number) => { 
        navigate(`/disciplinas/excluir/${id}`);
    }

    const cadastrar = () => {
        navigate(`/disciplinas/cadastro`)
    }
    const detalhar = (id: number) => {
        navigate(`/disciplinas/detalhes/${id}`)
    }

    return (
        <div className="lista-tarefas">
            <AppNavBar></AppNavBar>
                <button className="botao" id="basic-addon1" onClick={() => navigate(`/perfil/${localStorage.getItem('idUsuario')!}`)}> Perfil </button>
                <button className="botao" id="basic-addon1" onClick={cadastrar}> Cadastrar nova disciplina </button>
                <br></br><br></br>
                {
                carregando ? null :
                    <div>
                        {
                            disciplinas.map((disciplina:any) =>
                            <> 
                                { 
                                
                                <div key={disciplina.id}>
                                <div>
                                    <span id="basic-addon1">Nome: </span>
                                    <span aria-label="Nome" aria-describedby="basic-addon1">{disciplina.nome}</span>
                                </div>
                                <div>
                                    <span id="basic-addon1">Descrição: </span>
                                    <span aria-label="Descrição" aria-describedby="basic-addon1">{disciplina.descricao}</span>
                                </div>
                                <div>
                                    <button className="botao" id="basic-addon1" onClick={() => editar(disciplina.id)}>Editar</button>
                                    <button className="botao" id="basic-addon1" onClick={() => excluir(disciplina.id)}>Excluir</button>
                                    <button className="botao" id="basic-addon1" onClick={() => detalhar(disciplina.id)}>Detalhar</button>
                                </div>       
                                <br></br>
                            </div>
                                    
                                }  
                            
                            </>
                            )
                        }
                    </div> 
                }
        </div>
    );
};

export default ListaDisciplinas;