import "../../styles/usuario-style.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Perfil = (props: any) => {
    const params = useParams();
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
        navigate(`/perfil/editar/${user.id}`);
     }

     const excluir = () => { 
        navigate(`/perfil/excluir/${user.id}`);
     }
        
    return (
        <div className="page">
             <div className="box">
                <div>
                    <span id="basic-addon1">Nome: </span>
                    <span aria-label="Username" aria-describedby="basic-addon1">{user.nome}</span>
                </div>
                <div>
                    <span id="basic-addon1">Email: </span>
                    <span aria-label="Username" aria-describedby="basic-addon1">{user.email}</span>
                </div>
                <div>
                    <button className="botao" id="basic-addon1" onClick={editar}>Editar</button>
                    <button className="botao" id="basic-addon1" onClick={excluir}>Excluir</button>
                </div>       
            </div>
            <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
        </div>
  )
};

export default Perfil;
