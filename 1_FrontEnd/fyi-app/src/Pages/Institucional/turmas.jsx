import React, {Component} from 'react';

class Turmas extends Component{
    render(){
        return(
            <main className="content">
                <div className="turmasDisponiveis">
                    <h1>Todas as Turmas</h1>
                    <select multiple={true} value={[]}>
                    <option value="cargaHoraria">40 Horas</option>
                    <option value="dataInicio">Dezembro</option>
                    <option value="tema">Microsoft Dinamics 360</option>
                    <option value="tema">Microsoft Dinamics 360</option>
                    </select>
                </div>                
            </main>
        )
    }
};

export default Turmas;