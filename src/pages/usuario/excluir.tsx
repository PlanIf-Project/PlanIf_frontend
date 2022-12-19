import "../../styles/styles.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Excluir = (props: any) => {
    const params = useParams();
    const [error, setError] = useState({status: false, message: ''});
    const [user, setUser] = useState({id:'', nome:'', email:'', senha: ''});
    const navigate = useNavigate();
    
    const myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);

    useEffect(() => {
        fetch(`http://localhost:4000/usuarios/verUsuario/${params.id}`, { mode:'cors', headers: myHeaders})
          .then((res) => res.json())
          .then((data) => {
              setUser(data)
          }
        ).catch(() => {navigate(`/login`);});
    }, [])
  
      const excluir = () => { 
        axios.delete(`http://localhost:4000/usuarios/excluirUsuario/${params.id}`, { headers: {'x-access-token':localStorage.getItem('token')!}})
        .then(response => {
            if(response.status == 204 || response.status == 200 ) {
                setError({status: false, message:''}); 
                navigate(`/`);
            }
        }).catch(error => {
            if(error.response.status == 400) {
                setError({status: true, message:`${error.response.data}`});
            }
            else if(error.response.status == 500) {
                setError({status: true, message:"Problema no servidor!"}); 
            }
        });
     }

    return (
        <div className="page">
             <div className="box">
                <div>
                    <span id="basic-addon1">Nome:        </span>
                    <input className="input" placeholder="Nome" type="text" value={user.nome} disabled/>
                </div>
                <div>
                    <span id="basic-addon1">Email:      </span>
                    <input className="input" placeholder="Email" type="text" value={user.email} disabled/>
                </div>
                <div>
                    <button className="botao" id="basic-addon1" onClick={() => navigate(`/perfil/${params.id}`)}> Voltar </button>
                    <button className="botao exluir" id="basic-addon1" onClick={excluir}> Excluir </button>
                    { error.status ? <p className="error"> {error.message} </p> : null }
                </div>       
            </div>
        </div>
  )
};

export default Excluir;
