import "../styles/login-style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Perfil = (props: any) => {
    const params = useParams();
    const [error, setError] = useState({status: false, message: ''});
    const [user, setUser] = useState({id:'', nome:'', email:''});
    
    useEffect(() => {
        fetch(`http://localhost:4000/api/usuarios/${params.id}`, { mode:'cors'})
          .then((res) => res.json())
          .then((data) => {
              setUser(data)
          }
        );
      }, []);
  
    
    return (
        <div className="page">
            <table>
                <tr>
                    <th> Nome:</th>
                    <th> Email:</th>
                </tr>
                {
                params.id == undefined || params.id == null ? null :
                <tr>
                    <td> {user.nome} </td>
                    <td> {user.email}</td>
                </tr>
                }
            </table>
        </div>
  )
};

export default Perfil;
