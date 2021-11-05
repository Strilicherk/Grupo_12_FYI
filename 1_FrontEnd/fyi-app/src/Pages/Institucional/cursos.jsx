import React, { Component } from "react";

//css
import "../../assets/styles/cursos.css";

//componets
import Header from "../../components/header";
import Button from "../../components/buttom";

//Imagens
import microSo from "../../assets/img/microsoftt.svg";


//cursos logo
import bi from "../../assets/img/power-bi-1.svg";
import di from "../../assets/img/dinamic.svg";
import az from "../../assets/img/azure.svg";
import my from "../../assets/img/mysql.svg";

class Cursos extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <Header />
                </div>

                <div className="areas-container">

                    <div className="area-aling">


                        <div className="conteudo-curso container">
                            <div className="texto-sobre-curso">
                                <p>Áreas de interes</p>
                                <p>Aproveite para saber mais sobre :</p>
                            </div>

                            <div className="card-area">
                                <div className="card-da-area">


                                    <img src={my} alt="logo da Microsoft Azure" />
                                    <p>My Sql</p>
                                </div>

                                <div className="card-da-area">
                                    <img src={di} alt="logo da Microsoft Dinamic 360 " />
                                    <p>Dinamics 360</p>
                                </div>

                                <div className="card-da-area">
                                    <img src={az} alt="logo da Microsoft Azure" />
                                    <p>Azure</p>
                                </div>

                                <div className="card-da-area">
                                    <img src={bi} alt="logo do power bi " />
                                    <p>Power BI</p>
                                </div>
                            </div>

                            <Button>Todas as turmas</Button>


                        </div>


                    </div>

                    <div className="microsoft-bottom container">
                        <img src={microSo} alt="logo da microsoft" />
                    </div>






                </div>

                <div className="cursos-main container">

                    <p>Cursos para você <span>começar</span></p>
                    <hr />

                    <div className="local-do-curso">
                        <p>Nome da Area do curso</p>
                        <div className="scroll-curso">
                            
                        </div>
                    </div>


                </div>








            </>
        )
    }

}



export default Cursos;