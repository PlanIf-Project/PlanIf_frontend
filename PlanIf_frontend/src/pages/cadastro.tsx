import "../styles/login-style.css";
import { useState } from "react";
import planIfLogo from "../assets/logo.png";
import axios from 'axios';
import Login from "./login";
import { Router } from "react-router-dom";

const Cadastro = (props: any) => {
    const [error, setError] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userConfPass, setUserConfPass] = useState('');
    


    const cadastro = () => { 
       if(valid(userName) && valid(userEmail) && valid(userPass) && valid(userConfPass) && userPass == userConfPass) {
           let obj = {nome: userName, email: userEmail, senha: userPass};
           axios.post('http://localhost:4000/api/usuarios', obj).then(response => {
                if(response.status == 201) {
                    alert(`Usuário ${obj.nome} cadastrado com sucesso!`)
                    
                }
                else {
                    alert(`Falha ao cadastrar usuário ${obj.nome}.`)
                }
            })
           //setError(false);
       }
       else {
           //setError(true);
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
                <button onClick={cadastro}> Cadastrar </button>
                { error ? <p className="error"> Erro ao cadastrar </p> : null }
            </div>
            <div className="login">
                <p>  Já tem uma conta? <a href="/login"> Faça Login! </a> </p>
            </div>
        </div>
  </div>
  )
};

export default Cadastro;
