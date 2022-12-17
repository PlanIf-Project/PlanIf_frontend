import { useEffect, useState } from "react";
import "../../styles/usuario-style.css";
import { useNavigate, useParams } from "react-router-dom";

function Teste() {
  const [data, setData] = useState([{id: '', nome:'', email: '', senha:''}]);
  const navigate = useNavigate();

  let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);

  useEffect(() => {
    fetch("http://localhost:4000/usuarios/listarUsuarios",  { mode:'cors', headers: myHeaders})
      .then((res) => res.json())
      .then((data) => {
          setData(data)
          console.log(data)
      }
    ).catch(() => {
        navigate(`/login`);
    });
}, 
[])

  return (
    <div className="page">
        { 
        data == undefined ? null : 
            data.map((i:any) =>
            <div style={{color:"white"}} key={i.id}>
              <p>{ i.nome }</p>
              <p>{ i.email }</p>
              <p>{ i.senha }</p>
              <br/>
            </div> 
            )
        }


        
    </div>
  );
}

export default Teste;