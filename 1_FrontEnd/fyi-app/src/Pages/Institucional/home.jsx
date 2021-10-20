import "../../assets/styles/home.css";


import Header from "../../components/header";
import Button from "../../components/buttom";

//Imagens
import down from "../../assets/img/down.svg";
import clock from "../../assets/img/clock.svg";
import alunosicon from "../../assets/img/student.svg";
import empresaicon from "../../assets/img/empresa.svg"

//imagens logo das empresas
import castle from "../../assets/img/empresas/castle.png"
import microsoft from "../../assets/img/empresas/microsoft.png"
import pearson from "../../assets/img/empresas/pearson.png"
import prometric from "../../assets/img/empresas/prometric.png"

import { Router } from "react-router";
import { Component } from "react/cjs/react.production.min";


class Home extends Component {
  render() {
    return (
      (
        <div>
          <div className="background">
            <div className="container, text">
              {" "}
              <Header />
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
                <a href="#"><img src={down} /></a>
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
                    <img src={castle} alt="logo da castle "/>
                    <img src={microsoft} alt="logo da microsoft "/>
                    <img src={pearson} alt="logo da pearson "/>
                    <img src={prometric} alt="logo da Prometric "/>
                </div>
              </div>

              <div className="sobre">
                  <div className="sobre-fyi text">
                    <h3>Sobre a <br /> For Your Learning Information</h3>
                   
                    <p>A FYI nasceu em 2009 com a missão de formar excelentes profissionais para as principais soluções de negócios e tecnologia do mercado. Apoio a Microsoft e seu canal de parceiros em Business Applications e Power Platform.</p>
                  </div>
              </div>














            </main>
          </div>
        </div>
      )
    )
  }


}



export default Home;
