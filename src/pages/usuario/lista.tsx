import { useEffect, useState } from "react";
import "../../styles/styles.css";
import { useNavigate, useParams } from "react-router-dom";

const Index = () => {
  const [usuarios, setUsuarios] = useState([{id: '', nome:'', email: '', senha:''}]);
  const navigate = useNavigate();

  let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);

  useEffect(() => {
    fetch("http://localhost:4000/usuarios/listarUsuarios",  { mode:'cors', headers: myHeaders})
      .then((res) => res.json())
      .then((data) => {
          setUsuarios(data)
          console.log(data)
      }
    ).catch(() => {
        navigate(`/login`);
    });
}, 
[usuarios])

  return (
    <div className="page">
      <>
        { 
          !!usuarios && usuarios.forEach((usuario:any) => {
            <div className="box" key={usuario.id}>
              <div>
                <span id="basic-addon1">Nome: </span>
                <span aria-label="Nome" aria-describedby="basic-addon1">{usuario.nome}</span>
              </div>
              <div>
                <span id="basic-addon1">Email: </span>
                <span aria-label="Email" aria-describedby="basic-addon1">{usuario.data}</span>
              </div>
              <br></br><br></br>
            </div>
          })
        }
      </>
    </div>
  );
}

export default Index;