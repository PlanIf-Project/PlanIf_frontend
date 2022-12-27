import { useEffect, useState } from "react";
import "../../styles/styles.css";
import { useNavigate, useParams } from "react-router-dom";

const ListaUsuario = () => {
  const [usuarios, setUsuarios] = useState([{id: '', nome:'', email: '', senha:''}]);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  let myHeaders = new Headers();
    myHeaders.append('x-access-token', localStorage.getItem('token')!);

  useEffect(() => {
    fetch("http://localhost:4000/usuarios/listarUsuarios",  { mode:'cors', headers: myHeaders})
      .then((res) => res.json())
      .then((data) => {
          setUsuarios(data)
          setCarregando(false);
      }
    ).catch(() => {
        navigate(`/login`);
        setCarregando(false);
    });
}, 
[usuarios])

  return (
    <div className="page">
            <div className="box">
                {
                carregando ? null :
                    <div>
                        {
                            usuarios.map((usuario:any) => 
                            <div key={usuario.id}>
                            <div>
                              <span id="basic-addon1">Nome: </span>
                              <span aria-label="Nome" aria-describedby="basic-addon1">{usuario.nome}</span>
                            </div>
                            <div>
                              <span id="basic-addon1">Email: </span>
                              <span aria-label="Email" aria-describedby="basic-addon1">{usuario.email}</span>
                            </div>
                            <br></br><br></br>
                          </div>
                            )
                        }
                    </div> 
                }
            </div>
        </div>
  );
}

export default ListaUsuario;