import React, {Component} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import ca from '../../assets/img/cargahoraria.png';
import da from '../../assets/img/datainicio.png';

import '../../assets/styles/turmas.css';

class Turmas extends Component{
    render(){
        return(
            <>
                <main className="container">
                    <Header />
                    <div className="contentAlinhamento">
                        <section className="todasTurmasDisponiveis">
                            <h1 className="titulo">Todas as turmas</h1>
                            <div className="filtro">
                                <h3>Filtrar por:</h3>
                                <select className="select">
                                    <option className="option" value="cargaHoraria">40 Horas</option>
                                    <option className="option" value="dataInicio">Dezembro</option>
                                    <option className="option" value="tema">Microsoft Dinamics 360</option>
                                </select>
                            </div>
                        </section>
                        <hr className="linha"></hr>
                        <section className="turmasDisponiveis">
                            <div className="infosGerais">
                                <div className="infoCurso">
                                <div className="linha2"></div>
                                    <div>
                                        <h3>Microsoft Dinamics 360</h3>
                                        <p>Curso prático para profissionais que precisam aprender Gestão de Relacionamento com Clientes.</p>
                                    </div>
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
                            </div>      
                            <div className="infosGerais">
                                <div className="infoCurso">
                                <div className="linha2"></div>
                                    <div>
                                        <h3>Microsoft Dinamics 360</h3>
                                        <p>Curso prático para profissionais que precisam aprender Gestão de Relacionamento com Clientes.</p>
                                    </div>
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
                            </div>      
                            <div className="infosGerais">
                                <div className="infoCurso">
                                <div className="linha2"></div>
                                    <div>
                                        <h3>Microsoft Dinamics 360</h3>
                                        <p>Curso prático para profissionais que precisam aprender Gestão de Relacionamento com Clientes.</p>
                                    </div>
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
                            </div>      
                            <div className="infosGerais">
                                <div className="infoCurso">
                                <div className="linha2"></div>
                                    <div>
                                        <h3>Microsoft Dinamics 360</h3>
                                        <p>Curso prático para profissionais que precisam aprender Gestão de Relacionamento com Clientes.</p>
                                    </div>
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
                            </div>      
                            <div className="infosGerais">
                                <div className="infoCurso">
                                <div className="linha2"></div>
                                    <div>
                                        <h3>Microsoft Dinamics 360</h3>
                                        <p>Curso prático para profissionais que precisam aprender Gestão de Relacionamento com Clientes.</p>
                                    </div>
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
                            </div>      
                            <div className="infosGerais">
                                <div className="infoCurso">
                                <div className="linha2"></div>
                                    <div>
                                        <h3>Microsoft Dinamics 360</h3>
                                        <p>Curso prático para profissionais que precisam aprender Gestão de Relacionamento com Clientes.</p>
                                    </div>
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
                            </div>      
                            <div className="infosGerais">
                                <div className="infoCurso">
                                <div className="linha2"></div>
                                    <div>
                                        <h3>Microsoft Dinamics 360</h3>
                                        <p>Curso prático para profissionais que precisam aprender Gestão de Relacionamento com Clientes.</p>
                                    </div>
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
                            </div>      
                            <div className="infosGerais">
                                <div className="infoCurso">
                                <div className="linha2"></div>
                                    <div>
                                        <h3>Microsoft Dinamics 360</h3>
                                        <p>Curso prático para profissionais que precisam aprender Gestão de Relacionamento com Clientes.</p>
                                    </div>
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
                            </div>      
                            <div className="infosGerais">
                                <div className="infoCurso">
                                <div className="linha2"></div>
                                    <div>
                                        <h3>Microsoft Dinamics 360</h3>
                                        <p>Curso prático para profissionais que precisam aprender Gestão de Relacionamento com Clientes.</p>
                                    </div>
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
                            </div>      
                        </section>
                    </div>
                </main>
                <Footer/>          
            </>
        )
    }
};

export default Turmas;