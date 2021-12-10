import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import ca from '../../assets/img/cargahoraria.png';
import da from '../../assets/img/datainicio.png';

import '../../assets/styles/turmas.css';

class Turmas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaTodasTurmas: [],
            nomeTurma: "",
            descricao: "",
            dataInicio: "",
            cargaHoraria: "",
            filtro: ""
        }
    }

    listaTodasTurmas = () => {
        console.log('agora vamos fazer a chamada para API para atualizar a lista');

        // Faz a chamada para a API usando o fetch
        fetch('http://44.198.139.189/api/turmas/list', {
            headers: {
                // 'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        })

            .then(resposta => resposta.json())

            // .then(dados => console.log(dados.data))
            .then(dados => this.setState({ listaTodasTurmas: dados.data }))

            .catch(erro => console.log(erro))
    }

    mudaFiltro = campo => {

        this.setState({ filtro: campo.target.value });

      };

    componentDidMount() {
        this.listaTodasTurmas();
    }

    render() {
        return (
            <>
                <main className="container">
                    <Header />
                    <div className="contentAlinhamento">
                        <section className="todasTurmasDisponiveis">
                            <h1 className="titulo">Todas as turmas</h1>
                            {/* <div className="filtro">
                                <h3>Filtrar por:</h3>
                                <select className="select" name="filtro" value={this.state.campo} onChange={this.mudaFiltro}>
                                    <option className="option" value="Selecione">Selecione</option>                                        
                                    <option className="option" value="c# orientado">c# orientado</option>                                        
                                    <option className="option" value="PHP">PHP</option>                                        
                                    <option className="option" value="Microsoft Dinamics 365">Microsoft Dinamics 365</option>                                        
                                </select>
                            </div> */}
                        </section>
                        <hr className="linha"></hr>
                        <section className="turmasDisponiveis">
                            {
                                this.state.listaTodasTurmas
                                // .filter((turmas) => {
                                //     return (this.state.filtro)})
                                    .map((turmas) => {
                                    return (
                                        <div className="infosGerais">
                                            <div className="infoCurso">
                                                <div className="linha2"></div>
                                                <div key={turmas.id}>
                                                    <h3>{turmas.nomeTurma}</h3>
                                                    <a href="http://localhost:3000/inscricaocurso">{turmas.descricao}</a>
                                                </div>

                                            </div>
                                            <div className="gradeCurricular">
                                                <img className="logoCargaHoraria" src={ca} />
                                                <div className="cargaHoraria">
                                                    <p>Carga Horária</p>
                                                    <p className="horasData">{turmas.cargaHoraria} Horas</p>
                                                </div>
                                                <img className="logoCargaHoraria" src={da} />
                                                <div className="dataInicio">
                                                    <p>Data Início</p>
                                                    <p className="horasData">{Intl.DateTimeFormat("pt-BR", {
                                                        year: 'numeric', month: 'numeric', day: 'numeric'
                                                    }).format(new Date(turmas.dataInicio))}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    // .filter(nomeTurma == 'Microsoft Dinamics 360')
                                })
                            }


                            {/* <div className="infosGerais">
                            <div className="infoCurso">
                            <div className="linha2"></div>
                                    {
                                        this.state.listaTodasTurmas.map((turmas) => {
                                            return(
                                                <div key={turmas.id}>
                                                    <h3>{turmas.nomeTurma}</h3>
                                                    <p>{turmas.descricao}</p>
                                                </div>
                                            )
                                        })
                                    }
                                
                            </div>
                            <div className="gradeCurricular">
                                <img className="logoCargaHoraria" src={ca}/>
                                <div className="cargaHoraria">
                                    <p>Carga Horária</p>
                                    <p className="horasData">40 Horas</p>
                                </div>
                                <img className="logoCargaHoraria" src={da}/>
                                <div className="dataInicio">
                                    <p>Data Início</p>
                                    <p className="horasData">01/01/1991</p>
                                </div>
                            </div>
                        </div> */}
                        </section>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
};

export default Turmas;