import "../../assets/styles/home.css";
import { Link } from 'react-scroll';

//componetes
 
import Button from "../../components/buttom";
import Footer from '../../components/footer';


//Imagens
import down from "../../assets/img/down.svg";
import clock from "../../assets/img/clock.svg";
import alunosicon from "../../assets/img/student.svg";
import empresaicon from "../../assets/img/empresa.svg";
import ppclica from "../../assets/img/foto-clica.png";

//imagens logo das empresas
import castle from "../../assets/img/empresas/castle.png";
import microsoft from "../../assets/img/empresas/microsoft.png";
import pearson from "../../assets/img/empresas/pearson.png";
import prometric from "../../assets/img/empresas/prometric.png";

//Logo Fyi
import branca from "../../assets/img/fyi-branca.svg";
import logo2 from '../../assets/img/logo2.svg';

//Icones
import pin from "../../assets/img/pin.svg";
import wifi from "../../assets/img/trasnmition.svg";
import infra from "../../assets/img/estrutura.svg";
import flex from "../../assets/img/flex.svg";

import { Router } from "react-router";
import { Component } from "react/cjs/react.production.min";


 

class Home extends Component {
  render() {
    return (
      <div>
        <div className="background">
          <div className="container">
            {" "}



             

            <header>           
            <nav className="nav">   

                <a href="#"><img src={logo2} alt="Logo minimalista for your information Learning Solution - FYI"/></a>

                <div className="mobile-menu" >
                    <div className="1"></div>
                    <div className="2"></div>
                    <div className="3"></div>
                </div>

                <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="http://localhost:3000/cursos">Cursos</a></li>
                    <li><a href="#">Processo Seletivo</a></li>
                    <li><a href="#">Contato / Duvidas</a></li>
                </ul>
            </nav>
            
            <script src="../mobile-navbar.js"></script>
        </header>



          </div>

          <main>
            <div className="texto">
              <div className="information">
                <h2 className="container, text">
                  For Your Information Learning solution
                </h2>

                <p className=" container, text">
                  Desde 2003 sendo o principal <br />
                  centro de treinamento oficial <br /> da Microsoft
                </p>
              </div>
            </div>

            <div className="container text">
              <div className="saiba-btt">
                <Button>Saiba Mais</Button>
              </div>
            </div>

            <div className="desce">
              
              <Link to='sobre' smooth={true}>
                <img src={down} />
              </Link>

            </div>

            <div className="container">
              <div className="aling-solid">
                <div className="solid">
                  <div className="treinamento">
                    <img src={clock} />
                    <div className="down-txt">
                      <h4>+10000</h4>
                      <p>Horas de treinamento</p>
                    </div>
                  </div>

                  <div className="alunos">
                    <img src={alunosicon} />
                    <div className="down-txt">
                      <h4>+1000</h4>
                      <p>Alunos Treinados</p>
                    </div>
                  </div>

                  <div className="empresas">
                    <img src={empresaicon} />
                    <div className="down-txt">
                      <h4>+50</h4>
                      <p>Empresas Atendidas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="empresas-carrosel">
                <img src={castle} alt="logo da castle " />
                <img src={microsoft} alt="logo da microsoft " />
                <img src={pearson} alt="logo da pearson " />
                <img src={prometric} alt="logo da Prometric " />
              </div>
            </div>

            

            <div id="sobre">
              <div className="sobre-fyi text">
                <h3>
                  Sobre a <br /> For Your Learning Information
                </h3>

                <p>
                  A FYI nasceu em 2009 com a missão de formar excelentes
                  profissionais para as principais soluções de negócios e
                  tecnologia do mercado. Apoio a Microsoft e seu canal de
                  parceiros em Business Applications e Power Platform.
                </p>
              </div>
            </div>

            <div className="valores">
              <div className="nossos-valores text">
                <div className="texto-motivacional">
                  <h3>Nossos Valores</h3>
                  <p>
                    “Formar exelentes profissionais para as principais soluções
                    de negócios e tecnologia do mercado”
                  </p>

                  <p>
                    Reconhecemos a responsabilidade envolvida na qualidade de
                    entrega dos cursos para bom desenvolvimento do potencial de
                    cada indivíduo lutamos por isso
                  </p>
                </div>
              </div>
            </div>

            <div className="clica-ai">
              <div className="foto-clica">
                <div className="logo-fyi">
                  <img src={branca} alt="logo FYI branca" />
                </div>
                <img src={ppclica} alt="pessoas de fundo no predio da fyi" />
              </div>

              <div className="conhecas-nossos">
                <p>Conheça nossos cursos</p>

                <div className="informacoes-clica">

                  
                    <img src={pin} />
                    <p>Localização Privílegiadas</p>                 
                    <img src={wifi} />
                    <p>Transmissão de Aula pela Internet</p>
                    <img src={infra} />
                    <p>Infraestrutura Completa</p>
                    <img src={flex} />
                    <p>Flexibilidade e Serviços Adiciona</p>
                  
                  

                </div>

                <div className="botao-cl">
                  <Button>Inscreva-se</Button>
                </div>               
              </div>



            </div>

            <Footer/>

          </main>
        </div>
      </div>
    );
  }
}

export default Home;
