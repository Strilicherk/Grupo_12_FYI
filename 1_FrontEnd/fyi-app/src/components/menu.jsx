import React, {Component} from "react";
import { Link } from "react-router-dom";

//estilos
import "../assets/styles/menu.css";

class Menu extends Component{
    render(){
        const URL = window.location.pathname;
        console.log(URL);
        return (
            <div id="corzinha" className={ URL === '/adm/turmas'||'/adm/cursos'||'/adm/alunos'||'/adm/professores' ? 'menu menu-border-turmas' : 'settings-content-btn'}>
                <Link to="/" className="opcoes">
                    <p className={ URL === '/adm/turmas' ? '' : ''}>Início</p>
                </Link>
                <Link to="/adm/turmas" className="opcoes">
                    <p id="turmas-p" className={ URL === '/adm/turmas' ? 'menu-p-turmas' : ''}>Turmas</p>
                </Link>
                <Link to="/adm/cursos" className="opcoes">
                    <p id="cursos-p" className="menu-p">Cursos</p>
                </Link>
                <Link to="/adm/alunos" className="opcoes">
                    <p id="alunos-p" className="menu-p">Alunos</p>
                </Link>
                <Link to="/adm/professores" className="opcoes">
                    <p id="professores-p" className="menu-p">Professor</p>
                </Link>
            </div>
        );
    }
};

export default Menu;
