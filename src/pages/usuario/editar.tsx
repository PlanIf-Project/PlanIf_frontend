import "../../styles/usuario-style.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Editar = (props: any) => {
    const params = useParams();
    const [error, setError] = useState({status: false, message: ''});
    const [user, setUser] = useState({id:'', nome:'', email:'', senha: ''});
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:4000/verUsuario/${params.id}`, { mode:'cors'})
          .then((res) => res.json())
          .then((data) => {
              setUser(data)
          }
        );
      }, []);
  
      const editar = () => { 
        let obj = {id: user.id , nome: user.nome, email: user.email, senha: user.senha};
        axios.put('http://localhost:4000/editarUsuario', obj).then(response => {
            if(response.status == 204 || response.status == 200 ) {
                setError({status: false, message:''}); 
                navigate(`/perfil/${response.data}`);
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
                    <span id="basic-addon1">Nome:    </span>
                    <input className="input" placeholder="Nome" type="text" value={user.nome} onChange={(e)=> setUser({id: user.id , nome: e.target.value, email: user.email, senha: user.senha})}/>
                </div>
                <div>
                    <span id="basic-addon1">Email:    </span>
                    <input className="input" placeholder="Nome" type="text" value={user.email} onChange={(e)=> setUser({id: user.id , nome: user.nome, email: e.target.value, senha: user.senha})}/>
                    
                </div>
                <div>
                    <button className="botao" id="basic-addon1" onClick={() => navigate(`/perfil/${user.id}`)}> Voltar </button>
                    <button className="botao" id="basic-addon1" onClick={editar}> Editar </button>
                    { error.status ? <p className="error"> {error.message} </p> : null }
                </div>       
            </div>
            <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
        </div>
    )
};

export default Editar;
