import "../styles/usuario-style.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Excluir = (props: any) => {
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
  
      const excluir = () => { 
        axios.delete(`http://localhost:4000/excluirUsuario/${user.id}`).then(response => {
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
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Nome</span>
                    <span className="form-control"aria-label="Username" aria-describedby="basic-addon1">{user.nome}</span>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <span className="form-control"aria-label="Username" aria-describedby="basic-addon1">{user.email}</span>
                </div>
                <div className="input-group mb-3">
                    <button className=" input-group-textbotao" id="basic-addon1" onClick={excluir}> Excluir </button>
                    { error.status ? <p className="error"> {error.message} </p> : null }
                </div>       
            </div>
            <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
        </div>
  )
};

export default Excluir;
