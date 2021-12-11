import React from "react";
import { Link } from "react-router-dom";

//estilos
import "../assets/styles/footer.css";


// imagens
import Mapa from "../assets/img/Mapa.png";

//logo
import logoazul from "../assets/img/square-blue.svg"

//icones
import email from "../assets/img/email.svg"
import telefone from "../assets/img/telefone.svg"
import linkedin from "../assets/img/linkedin.svg"
import face from "../assets/img/face.svg"
import youtube from "../assets/img/yout.svg"

const Footer = () => {
  return (
    <footer>
      <div className="main ">
            <div className="footer-aling container">
                <div className="logo-square">
                    <img src={logoazul} alt="Logo Azul da FYI" />
                </div>
                <div className="contatos-redes">
                    <div className="ctt">
                        <h5>Contato</h5>
                        <div className="tele-email">
                            <img src={email} />
                            <p>email@exemplo.com</p>
                            <img src={telefone}/>
                            <p>+55 (11) 3253-2529</p>
                        </div>
                    </div>
                    <div className="reds">
                        <h5>Rede Sociais</h5>
                        <div className="img-redes">
                            <a target="_blank" href="https://www.linkedin.com/company/fyi-learning-solutions/?originalSubdomain=br"><img src={linkedin}/></a>
                            <a target="_blank" href="https://www.facebook.com/FYIBrasil"><img src={face}/></a>
                            <a target="_blank" href="https://www.youtube.com/channel/UCF4AwPhPju8tJTyFcHlZwsQ"><img src={youtube}/></a>
                        </div>
                    </div>
                </div>
                <div className="mapa">
                    <img src={Mapa} alt="Localização da FYI" />
                </div>
            </div>
      </div>
      <div className="direitos">
        <p>Todos os direitos reservados &copy;</p>
      </div>
    </footer>
  );
};

export default Footer;
