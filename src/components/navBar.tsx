import "./styles/nav-bar.ts";
import { Header } from "./styles/nav-bar";

const AppNavBar = (props: any) => {
    return (
        <Header>
            <nav>
                <div>
                    <ul>
                        <li> <span className="mymenu">PlanIf </span></li>
                        <li>
                            <a className="mymenu" href="/tarefas"> Tarefas </a>
                        </li>
                        <li>
                            <a className="mymenu" href="/disciplinas"> Disciplinas </a>
                        </li>
                        <li>
                            <a className="mymenu" href={`/perfil/${localStorage.getItem('idUsuario')}`}> Perfil </a>
                        </li>
                    </ul>
                </div>
            </nav>


            
        </Header>
    )
}

export default AppNavBar;