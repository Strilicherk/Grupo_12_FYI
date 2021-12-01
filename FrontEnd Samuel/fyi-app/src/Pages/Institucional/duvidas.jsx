import React, { Component } from "react";

import '../../assets/styles/duvidas.css';

import Header from "../../components/header";

//img
import logoazul from '../../assets/img/logofyiazul.svg';



class duvidas extends Component {
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
                                    <label className="accordion-label" for="check1">Apolinario 23</label>
                                    <div className="accordion-content">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing </p>
                                    </div>
                                </div>

                                <div className="accordion">
                                    <input type="radio" name="radio-a" id="check2" checked />
                                    <label className="accordion-label" for="check2">Apolinario 23</label>
                                    <div className="accordion-content">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing </p>
                                    </div>
                                </div>

                                <div className="accordion">
                                    <input className="enput" type="radio" name="radio-a" id="check3" checked />
                                    <label className="accordion-label" for="check3">Apolinario 23</label>
                                    <div className="accordion-content">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing </p>
                                    </div>
                                </div>


                            </div>






                        </div>








                        <div className="right-question">
                            <img src={logoazul} alt="Logo minimalista for your information Learning Solution - FYI" />
                        </div>
                    </div>








                </div>


            </div>
        )
    }

}



export default duvidas;