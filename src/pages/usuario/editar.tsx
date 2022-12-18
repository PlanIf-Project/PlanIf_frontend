import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Editar = (props: any) => {
    const params = useParams();
    const [error, setError] = useState({status: false, message: ''});
    const [user, setUser] = useState({id:'', nome:'', email:'', senha: ''});
    const navigate = useNavigate();
    
    let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);

    useEffect(() => {
        fetch(`http://localhost:4000/usuarios/verUsuario/${params.id}`, { mode:'cors', headers: myHeaders})
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
            })
            .catch(() => {
                navigate(`/login`);
            });
        }, 
    [])
  
    const editar = () => { 
        let obj = {id: user.id , nome: user.nome, email: user.email, senha: user.senha};
        axios.put('http://localhost:4000/usuarios/editarUsuario', obj)
            .then(response => {
                if(response.status == 204 || response.status == 200 ) {
                    setError({status: false, message:''}); 
                    navigate(`/perfil/${response.data}`);
                }
            })
            .catch(error => {
                if(error.response.status == 400) {
                    setError({status: true, message:`${error.response.data}`});
                }
                else if(error.response.status == 500) {
                    setError({status: true, message:"Problema no servidor!"}); 
                }
            }
        );
    }

    return (
        <div className="page">
            <div className="box">
                <div>
                    <span id="basic-addon1">Nome:    </span>
                    <input className="input" placeholder="Nome" type="text" value={user.nome} onChange={(e)=> setUser({id: user.id , nome: e.target.value, email: user.email, senha: user.senha})}/>
                </div>
                <div>
                    <span id="basic-addon1">Email:    </span>
                    <input className="input" placeholder="Email" type="text" value={user.email} onChange={(e)=> setUser({id: user.id , nome: user.nome, email: e.target.value, senha: user.senha})}/>
                    
                </div>
                <div>
                    <button className="botao" id="basic-addon1" onClick={() => navigate(`/perfil/${user.id}`)}> Voltar </button>
                    <button className="botao" id="basic-addon1" onClick={editar}> Editar </button>
                    { error.status ? <p className="error"> {error.message} </p> : null }
                </div>       
            </div>
        </div>
    )
};

export default Editar;
