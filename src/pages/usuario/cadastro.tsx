import "../../styles/styles.css";
import { useState } from "react";
import planIfLogo  from "../../assets/logo.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Cadastro = (props: any) => {
    const [error, setError] = useState({status: false, message: ''});
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userConfPass, setUserConfPass] = useState('');
    const navigate = useNavigate();

    const cadastro = () => { 
       if(valid(userName) && valid(userEmail) && valid(userPass) && valid(userConfPass) && userPass == userConfPass) {
           let obj = {nome: userName, email: userEmail, senha: userPass};
         
           axios.post('http://localhost:4000/usuarios/criarUsuario', obj).then(response => {
               if(response.status == 204 || response.status == 200 ) {
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('idUsuario', response.data.id)
                    setError({status: false, message:''}); 
                    navigate(`/perfil/${response.data.id}`);
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
        else {
            setError({status: true, message:"Algum dado inserido está errado, verifique novamente"});
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
                <div className="logo">
                    <img id="logo_img" alt="Logo" src={planIfLogo}/>
                </div>
                <div className="form">
                    <form onSubmit={(e) => {cadastro()}}>
                        <div>
                            <input className="input" placeholder="Nome" type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
                        </div>
                        <div>
                            <input className="input" placeholder="Email" type="text" value={userEmail} onChange={(e)=> setUserEmail(e.target.value)}/>
                        </div>
                        <div>
                            <input className="input" placeholder="Senha" type="password" value={userPass} onChange={(e)=> setUserPass(e.target.value)}/>
                        </div>
                        <div>
                            <input className="input" placeholder="Confirme sua senha" type="password" value={userConfPass} onChange={(e)=> setUserConfPass(e.target.value)}/>
                        </div>
                        </form> 
                </div>
                <div className="botoes">
                    <div className="button">
                        <button className="botao" onClick={cadastro}> Cadastrar </button>
                        { error.status ? <p className="error"> {error.message} </p> : null }
                    </div>
                    <div className="login">
                        <p> Já tem uma conta? <a href="/login"> Faça Login! </a> </p>
                    </div>
                </div>
            </div>
        </div>
  )
};

export default Cadastro;
