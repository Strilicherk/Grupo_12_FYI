import React from 'react'
import { Link } from "react-router-dom";

//estilos
import '../assets/styles/header.css';
import '../mobile-navbar';

// imagens
import logoazul from '../assets/img/logofyiazul.svg';




const Header = () => {
    return ( 

        <header>           
            <nav className="header">   
                <a href="#"><img src={logoazul} alt="Logo minimalista for your information Learning Solution - FYI"/></a>

                <div className="mobile-menu" >
                    <div className="1"></div>
                    <div className="2"></div>
                    <div className="3"></div>
                </div>

                <ul className="nav-list">
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="http://localhost:3000/cursos">Cursos</a></li>
                    <li><a href="#">Contato / Duvidas</a></li>
                </ul>
            </nav>
            
            <script src="../mobile-navbar.js"></script>
        </header>


    );

}
 
export default Header;