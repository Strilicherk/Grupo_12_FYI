import "../../assets/styles/home.css";


import Header from "../../components/header";
import Button from "../../components/buttom";


import down from "../../assets/img/down.svg";
import clock from "../../assets/img/clock.svg";
import alunosicon from "../../assets/img/student.svg";
import empresaicon from "../../assets/img/empresa.svg"

import { Router } from "react-router";
import { Component } from "react/cjs/react.production.min";


class Home extends Component{
  render(){
    return(
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
                <div className="solid">
    
                  <div className="treinamento">
                    <img src={clock}/>
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
    
            </main>
          </div>
        </div>
      )
    )
  }


}



export default Home;
