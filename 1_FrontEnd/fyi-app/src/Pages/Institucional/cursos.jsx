import React, { Component } from "react";

//css
import "../../assets/styles/cursos.css";

//componets
import Header from "../../components/header";
import Button from "../../components/buttom";

//Imagens
import microSo from "../../assets/img/microsoftt.svg";
import { queryByAttribute } from "@testing-library/dom";

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
                                    
                                </div>

                                <div className="card-da-area">

                                </div>

                                <div className="card-da-area">

                                </div>

                                <div className="card-da-area">

                                </div>
                            </div>

                            <Button>Todas as turmas</Button>


                        </div>


                    </div>

                    <div className="microsoft-bottom container">
                        <img src={microSo} alt="logo da microsoft" />
                    </div>




                </div>








            </>
        )
    }

}



export default Cursos;