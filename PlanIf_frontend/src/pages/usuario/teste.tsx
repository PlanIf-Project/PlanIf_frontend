import { useEffect, useState } from "react";
import "../../styles/usuario-style.css";
import { useNavigate, useParams } from "react-router-dom";

function Teste() {
  const [data, setData] = useState([{id: '', nome:'', email: '', senha:''}]);

  useEffect(() => {
    fetch("http://localhost:4000/listarUsuarios",  { mode:'cors'})
      .then((res) => res.json())
      .then((data) => {
          setData(data)
          console.log(data)
      }
    );
  }, []);

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