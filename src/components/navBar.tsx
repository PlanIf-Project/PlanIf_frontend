import "./styles/nav-bar.ts";
import { Header } from "./styles/nav-bar";
import { NavLink } from "react-router-dom"

const AppNavBar = (props: any) => {

    let activeStyle = {
        textDecoration: "underline",
    };
    let activeClassName = "underline";
    return (
        <Header>
            <nav>
                <b className="title">PlanIf </b>
                <ul>
                    
                        <li>
                            <NavLink to="/disciplinas"
                                style={({ isActive }) => isActive ? activeStyle : undefined
                                }
                            >
                                Messages
                            </NavLink>
                            <a className="mymenu selecionado" href="/tarefas"> Tarefas </a>
                        </li>
                        
                    <li>
                        <a className="mymenu" href="/disciplinas"> Disciplinas </a>
                    </li>
                    <li>
                        <a className="mymenu" href={`/perfil/${localStorage.getItem('idUsuario')}`}>
                            Perfil 
                        </a>
                    </li>
                </ul>
            </nav>
        </Header>
    )
}

export default AppNavBar;