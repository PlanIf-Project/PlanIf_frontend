import { useState } from "react";
import "../styles/login-style.css"
import planIfLogo from "../assets/logo.png"

const Login = () => {
    const [error, setError] = useState(false);
    const usuarios = [{email:'mariana@teste.com', senha: '123'}];
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
  


    const login = () => { 
        let achado = usuarios
        .filter(user => user.email == userEmail)
        .filter(user => user.senha == userPass);
        if(achado.length == 0) {
            setError(true);
        }
        else {
            setError(false);
        }
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
                <input className="input" placeholder="Email" type="text" value={userEmail} onChange={handleChangeEmail}/>
            </div>
            <div>
                <input className="input" placeholder="Senha" type="password" value={userPass} onChange={handleChangePass}/>
            </div> 
        </div>
        <div className="botoes">
            <div className="button">
                <button onClick={login}> Login </button>
                { error ? <p className="error"> Usuario não encontrado </p> : null}
            </div>
            <div className="login">
                <p>  Não tem uma conta? <a href="/"> Cadastre-se!</a> </p>
            </div>
        </div>
  </div>
  )
};

export default Login;
