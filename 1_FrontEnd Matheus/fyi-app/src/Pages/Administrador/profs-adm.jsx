import React, {Component} from 'react';
//import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/profsAdm.css'

// bootstrap
//import Form from 'react-bootstrap/Form'
//import FloatingLabel from 'react-bootstrap/Form'

class ProfsAdm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            erroMenssagem : '',
            isLoading : false
        }
    };

    mudaCor = () => {
        var x = document.getElementById("corzinha");
        x.style.borderLeft = "3px solid #FFB900"
    }

    mudaMenu = () => {
        var x = document.getElementById("professores-p");
        x.style.color = "#FFB900"
    }

    componentDidMount(){
        this.mudaCor();
        this.mudaMenu();
    }

    render(){
        return(
            <main>
                <section className="profs-header">
                    <div className="profs-content">
                        <Header />
                    </div>
                </section>
                <section className="center-profs">
                    <div className="center-content-profs">
                        <div className="side-menu">
                            <Menu />
                        </div>
                        <div className="side-content-profs">
                            <h1>Cadastrando Professores</h1>
                            <div className="form-content-profs">
                                <form className="formulario-profs">
                                <div className="esquerda-profs">
                                        <input placeholder="Nome"/>
                                        <input placeholder="Sobrenome"/>
                                    </div>
                                    <div className="direita-profs">
                                        <input placeholder="Telefone"/>
                                        <button className="btn-cadastrar-profs">Cadastrar Professor</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="table-section-profs">
                    <div className="table-content-profs">
                        <h1>Listando Professores</h1>
                        <div className="table-info-profs">
                            <table className="table-settings-profs">
                                <thead className="table-header-profs">
                                    <tr id="topo">
                                        <th>Nome</th>
                                        <th>Sobrenome</th>
                                        <th>Telefone</th>
                                        <th>CPF</th>
                                        <th>Data de Nascimento</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body-profs">
                                    <tr>
                                        <td>Lucas</td>
                                        <td>Apolinario</td>
                                        <td>11 94002 - 8922</td>
                                        <td>123.456.748 - 43</td>
                                        <td>03 / 03 / 2003</td>
                                    </tr>
                                    <tr>
                                        <td>Lucas</td>
                                        <td>Apolinario</td>
                                        <td>11 94002 - 8922</td>
                                        <td>123.456.748 - 43</td>
                                        <td>03 / 03 / 2003</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
};

export default ProfsAdm;