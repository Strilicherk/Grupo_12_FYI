import React, {Component} from 'react';
//import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/adm/alunosAdm.css'

// bootstrap
//import Form from 'react-bootstrap/Form'
//import FloatingLabel from 'react-bootstrap/Form'

class AlunosAdm extends Component{
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
        x.style.borderLeft = "3px solid #7FBA00"
    }

    mudaMenu = () => {
        var x = document.getElementById("alunos-p");
        x.style.color = "#7FBA00"
    }

    componentDidMount(){
        this.mudaCor();
        this.mudaMenu();
    }

    render(){
        return(
            <main>
                <section className="alunos-header">
                    <div className="alunos-content">
                        <Header />
                    </div>
                </section>
                <section className="center-alunos">
                    <div className="center-content-alunos">
                        <div className="side-menu">
                            <Menu />
                        </div>
                        <div className="side-content-alunos">
                            <h1>Cadastrando Alunos</h1>
                            <div className="form-content-alunos">
                                <form className="formulario-alunos">
                                <div className="esquerda-alunos">
                                        <input placeholder="Nome"/>
                                        <input placeholder="Sobrenome"/>
                                        <input placeholder="CPF"/>
                                        <div className="data-nascimento">
                                            <label>Data de nascimento</label>
                                            <input type="date"/> 
                                        </div>
                                    </div>
                                    <div className="direita-alunos">
                                        <input placeholder="Telefone"/>
                                        <input placeholder="E-mail"/>
                                        <input placeholder="Senha"/>
                                        <select className="select-alunos">
                                            <option>Escolha a Turma</option>
                                            <option>Turma A</option>
                                            <option>Turma B</option>
                                            <option>Turma C</option>
                                        </select>
                                        <button className="btn-cadastrar-alunos">Cadastrar Aluno</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="table-section-alunos">
                    <div className="table-content-alunos">
                        <h1>Listando Alunos</h1>
                        <div className="table-info-alunos">
                            <table className="table-settings-alunos">
                                <thead className="table-header-alunos">
                                    <tr id="topo">
                                        <th>Nome</th>
                                        <th>Sobrenome</th>
                                        <th>Telefone</th>
                                        <th>CPF</th>
                                        <th>Data de Nascimento</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body-alunos">
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

export default AlunosAdm;