import { useState } from "react";
import "../styles/usuario-style.css"
import planIfLogo from "../../assets/logo.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState({status: false, message: ''});
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const navigate = useNavigate();

    const login = () => { 
        if(valid(userEmail) && valid(userPass)) {
            let obj = {email: userEmail, senha: userPass};
          
            axios.post('http://localhost:4000/login', obj).then(response => {
                if(response.status == 204 || response.status == 200 ) {
                    setError({status: false, message:''}); 
                    navigate(`/perfil/${response.data.id}`);
                 }
                
             }).catch(error => {
                 console.log(error)
                 if(error.response.status == 400) {
                     setError({status: true, message:`${error.response.data}`});
                 }
                  else if(error.response.status == 500) {
                      setError({status: true, message:"Problema no servidor!"}); 
                  }
                  else {
                    setError({status: true, message:`${error.response.data}`});
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
                <div>
                    <input className="input" placeholder="Email" type="text" value={userEmail} onChange={(e)=> setUserEmail(e.target.value)}/>
                </div>
                <div>
                    <input className="input" placeholder="Senha" type="password" value={userPass} onChange={(e)=> setUserPass(e.target.value)}/>
                </div> 
            </div>
            <div className="botoes">
                <div className="button">
                    <button onClick={login}> Login </button>
                    { error.status ? <p className="error"> {error.message} </p> : null}
                </div>
                <div className="login">
                    <p>  Não tem uma conta? <a href="/"> Cadastre-se!</a> </p>
                </div>
            </div>
        </div>
  </div>
  )
};

export default Login;
