import React from 'react'
import { Link } from "react-router-dom";

//estilos
import '../assets/styles/header.css';
import '../mobile-navbar';

// imagens
import logo1 from '../assets/img/logo2.svg';



const Header = () => {
    return ( 

        <header>           
            <nav>   
                <a href="#"><img src={logo1} alt="Logo minimalista for your information Learning Solution - FYI"/></a>

                <div className="mobile-menu">
                    <div className="1"></div>
                    <div className="2"></div>
                    <div className="3"></div>
                </div>

                <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cursos</a></li>
                    <li><a href="#">Processo Seletivo</a></li>
                    <li><a href="#">Contato / Duvidas</a></li>
                </ul>
            </nav>
            
            <script src="../mobile-navbar.js"></script>
        </header>


    );

}
 
export default Header;