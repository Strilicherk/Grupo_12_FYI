import React, {Component} from 'react';

import '../../assets/css/turmas.css'

class Turmas extends Component{
    render(){
        return(
            <main className="content">
                <section className="todasTurmasDisponiveis">
                    <h1 className="titulo">Todas as Turmas</h1>
                    <h2 className="filtro">Filtrar por:</h2>
                    <select className="select">
                    <option value="cargaHoraria">40 Horas</option>
                    <option value="dataInicio">Dezembro</option>
                    <option value="tema">Microsoft Dinamics 360</option>
                    <option value="tema">Microsoft Dinamics 360</option>
                    </select>
                </section>
                <line className="linha"></line>
                <section className="turmasDisponiveis">
                    <div className="infosGerais">
                            <h2>Microsoft Dinamics 360</h2>
                        <div className="textoCurso">
                            <p>Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição.</p>
                        </div>
                        <div className="gradeCurricular">
                            <p>Carga Horária</p>
                            <p className="horas">40 Horas</p>
                            <p>Data Início</p>
                            <p className="horas">40 Horas</p>
                        </div>                        
                    </div>                    
                    <div className="infosGerais">
                            <h2>Microsoft Dinamics 360</h2>
                        <div className="textoCurso">
                            <p>Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição.</p>
                        </div>
                        <div className="gradeCurricular">
                            <p>Carga Horária</p>
                            <p className="horas">40 Horas</p>
                            <p>Data Início</p>
                            <p className="horas">40 Horas</p>
                        </div>
                    </div>                    
                    <div className="infosGerais">
                            <h2>Microsoft Dinamics 360</h2>
                        <div className="textoCurso">
                            <p>Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição.</p>
                        </div>
                        <div className="gradeCurricular">
                            <p>Carga Horária</p>
                            <p className="horas">40 Horas</p>
                            <p>Data Início</p>
                            <p className="horas">40 Horas</p>
                        </div>
                    </div>                    
                </section>               
            </main>
        )
    }
};

export default Turmas;