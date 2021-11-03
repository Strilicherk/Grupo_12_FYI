import React, {Component} from 'react';

import '../../assets/css/turmas.css'

class Turmas extends Component{
    render(){
        return(
            <main className="content">
                <section className="todasTurmasDisponiveis">
                    <h1>Todas as Turmas</h1>
                    <h2>Filtrar por:</h2>
                    <select className="select">
                    <option value="cargaHoraria">40 Horas</option>
                    <option value="dataInicio">Dezembro</option>
                    <option value="tema">Microsoft Dinamics 360</option>
                    <option value="tema">Microsoft Dinamics 360</option>
                    </select>
                </section>
                <section className="turmasDisponiveis">
                    <div className="infosGerais">
                        <div className="textoCurso">
                            <h2></h2>
                        </div>
                        <div className="gradeCurricular">
                            <h2>Carga Horária</h2>
                            <p>40 Horas</p>
                        </div>
                    </div>
                    <div className="infosGerais">
                        <div className="textoCurso">
                            <h2></h2>
                        </div>
                        <div className="gradeCurricular">
                            <h2>Carga Horária</h2>
                            <p>40 Horas</p>
                        </div>
                    </div>
                    <div className="infosGerais">
                        <div className="textoCurso">
                            <h2></h2>
                        </div>
                        <div className="gradeCurricular">
                            <h2>Carga Horária</h2>
                            <p>40 Horas</p>
                        </div>
                    </div>
                </section>               
            </main>
        )
    }
};

export default Turmas;