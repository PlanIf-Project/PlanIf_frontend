import "../styles/perfil-style.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppNavBar from "../components/navBar";
import { Navbar } from "react-bootstrap";
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
        
        let obj = {id: user.id , nome: "Mariana", email: user.email, senha: user.senha};
            axios.put('http://localhost:4000/editarUsuario', obj).then(response => {
                if(response.status == 204 || response.status == 200 ) {
                    setError({status: false, message:''}); 
                    axios.get(`http://localhost:4000/verUsuario/${response.data}`).then(res => {
                        setUser(res.data)
                    })
                    setUser(response.data)
                    //navigate(`/perfil/${response.data}`);
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

     const excluir = () => { 
        
        let obj = {id: user.id , nome: "Mariana", email: user.email, senha: user.senha};
            axios.put('http://localhost:4000/editarUsuario', obj).then(response => {
                if(response.status == 204 || response.status == 200 ) {
                    setError({status: false, message:''}); 
                    axios.get(`http://localhost:4000/verUsuario/${response.data}`).then(res => {
                        setUser(res.data)
                    })
                    setUser(response.data)
                    //navigate(`/perfil/${response.data}`);
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
                <AppNavBar/>
                
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Nome</span>
                    <span className="form-control"aria-label="Username" aria-describedby="basic-addon1">{user.nome}</span>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <span className="form-control"aria-label="Username" aria-describedby="basic-addon1">{user.email}</span>
                </div>
                <div className="input-group mb-3">
                    <button className="input-group-text" id="basic-addon1" onClick={editar}>Editar</button>
                    <button className="input-group-text" id="basic-addon1" onClick={excluir}>Excluir</button>
                </div>

                   
            <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
        </div>
  )
};

export default Editar;
