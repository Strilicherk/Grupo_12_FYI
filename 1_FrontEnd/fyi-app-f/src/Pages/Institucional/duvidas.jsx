import React, { Component } from "react";

import '../../assets/styles/duvidas.css';

import Header from "../../components/header";
//img
import logoazul from '../../assets/img/logofyiazul.svg';



class Duvidas extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header />
                    <p className="perguntas-textos">
                        Perguntas Frequentes
                    </p>
                    <div className="center-quesion">
                        <div className="left-question">
                            <div className="accordion-wrapper">
                                <div className="accordion">
                                    <input className="enput" type="radio" name="radio-a" id="check1" checked />
                                    <label className="accordion-label" for="check1">Quais tipos de produto a empresa oferece?</label>
                                    <div className="accordion-content">
                                        <p>Em parceria com a Microsoft, nós oferecemos cursos tecnologicos para quem quer se aprimorar no mercado de trabalho.</p>
                                    </div>
                                </div>
                                <div className="accordion">
                                    <input type="radio" name="radio-a" id="check2" checked />
                                    <label className="accordion-label" for="check2">Há pré-requisitos para se inscrever nesses cursos?</label>
                                    <div className="accordion-content">
                                        <p>Temos uma grande variedade de cursos e turmas, algumas delas não precisam de pré-requisitos, já outras sim.</p>
                                    </div>
                                </div>
                                <div className="accordion">
                                    <input className="enput" type="radio" name="radio-a" id="check3" checked />
                                    <label className="accordion-label" for="check3">Como posso fazer contato com a empresa?</label>
                                    <div className="accordion-content">
                                        <p>É possível entrar em contato conosco através do nosso número de telefone: +55 (11) 3253-2529. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}



export default Duvidas;