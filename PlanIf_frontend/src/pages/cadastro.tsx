import { useState } from "react";
import "../styles/login-style.css";
import planIfLogo from "../assets/logo.png";
import { Navigate } from "react-router-dom";

const Cadastro = () => {
    let usuarios = new Array<any>();
    const [error, setError] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
  


    const cadastro = () => { 
       if(userName != "" && "" != null && userPass != "") {
           let obj = {nome: userName, email: userEmail, senha: userPass};
           usuarios.push(obj);
           setError(false);
           console.log(usuarios);
       }
       else {
           setError(true);
       }
    }

    const handleChangeName = (event: any) => {
        setUserName(event.target.value);
      }
    const handleChangeEmail = (event: any) => {
      setUserEmail(event.target.value);
    }
    const handleChangePass = (event: any) => {
      setUserPass(event.target.value);
    }

  return (
    <div className="page">
        <div className="logo">
            <img id="logo_img" alt="Logo" src={planIfLogo}/>
        </div>
        <div className="form">
            <div>
                <input className="input" placeholder="Nome" type="text" value={userName} onChange={handleChangeName}/>
            </div>
            <div>
                <input className="input" placeholder="Email" type="text" value={userEmail} onChange={handleChangeEmail}/>
            </div>
            <div>
                <input className="input" placeholder="Senha" type="password" value={userPass} onChange={handleChangePass}/>
            </div> 
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
