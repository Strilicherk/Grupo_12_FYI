import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    constructor(props) {
        super(props)
        this.state = {
            listaCursos: [],
            listaTurmas: [],
        }
    }

    componentDidMount() {
        this.buscarCursos();
        this.buscarTurmas();
    }

    buscarTurmas = () => {
        axios('http://3.85.229.211/api/Turmas/list', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ listaTurmas: resposta.data.data })
                    console.log(this.state.listaTurmas)
                }
            })
            .catch(erro => console.log(erro))
    }

    buscarCursos = () => {
        axios('http://3.85.229.211/api/Cursos/list', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ listaCursos: resposta.data.data })
                    console.log(this.state.listaCursos)
                }
            })
            .catch(erro => console.log(erro))
    }

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

                            <Link to="/turmas">
                                <Button>Todas as turmas</Button>
                            </Link>
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
                        {this.state.listaCursos.map(cursos => {
                            return (
                                <div className="title__content">
                                    <div className="pixel__title">
                                        <p>{cursos.nomeCurso}</p>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="scroll-curso">
                            <div class="scrolling-wrapper">
                                {
                                    this.state.listaCursos.map(cursos => {
                                        return (

                                            <div class="card__curso">
                                                <div className="imagem__card">
                                                    <div className="icone-aling">
                                                        <div className="tag_curso">
                                                            <div className="tag__ok">
                                                                <img src={bi} alt="icon power bi" />
                                                            </div>
                                                        </div>
                                                        <div className="titulo_card_curso">
                                                            <div className="quote_p"></div>
                                                            {this.state.listaTurmas.map(turmas => {
                                                                return (
                                                                    <p>{turmas.nomeTurma}</p>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card__botton">
                                                    {this.state.listaTurmas.map(turmas => {
                                                        return (
                                                            <p>{turmas.descricao}</p>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

}



export default Cursos;