import React, {Component} from 'react';
//import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/cursosAdm.css'

// bootstrap
//import Form from 'react-bootstrap/Form'
//import FloatingLabel from 'react-bootstrap/Form'

class CursosAdm extends Component{
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
        x.style.borderLeft = "3px solid #F25022"
    }

    mudaMenu = () => {
        var x = document.getElementById("cursos-p");
        x.style.color = "#F25022"
    }

    componentDidMount(){
        this.mudaCor();
        this.mudaMenu();
    }

    render(){
        return(
            <main>
                <section className="cursos-header">
                    <div className="cursos-content">
                        <Header />
                    </div>
                </section>
                <section className="center-cursos">
                    <div className="center-content-cursos">
                        <div className="side-menu">
                            <Menu />
                        </div>
                        <div className="side-content-cursos">
                            <h1>Cadastrando Cursos</h1>
                            <div className="form-content-cursos">
                                <form className="formulario-cursos">
                                    <div className="esquerda-cursos">
                                        <input placeholder="Nome"/>
                                        <button className="btn-cadastrar-cursos">Cadastrar Turma</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="table-section-cursos">
                    <div className="table-content-cursos">
                        <h1>Listando Cursos</h1>
                        <div className="table-info-cursos">
                            <table className="table-settings-cursos">
                                <thead className="table-header-cursos">
                                    <tr id="topo">
                                        <th>Nome</th>
                                        <th>Curso</th>
                                        <th>Professor</th>
                                        <th>Alunos / Max. Alunos</th>
                                        <th>Data de Início</th>
                                        <th>Data de Término</th>
                                        <th>Editar</th>
                                        <th>Excluir</th> 
                                    </tr>
                                </thead>
                                <tbody className="table-body-cursos">
                                    <tr>
                                        <td>Power BI avançado</td>
                                        <td>Power BI</td>
                                        <td>Paulo Brandão</td>
                                        <td>25 / 40</td>
                                        <td>03 / 03 / 2003</td>
                                        <td>16 / 11 / 2021</td>
                                    </tr>
                                    <tr>
                                        <td>Power BI avançado</td>
                                        <td>Power BI</td>
                                        <td>Paulo Brandão</td>
                                        <td>25 / 40</td>
                                        <td>03 / 03 / 2003</td>
                                        <td>16 / 11 / 2021</td>
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

export default CursosAdm;