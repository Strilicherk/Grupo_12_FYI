import React, { Component } from 'react';
import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/adm/profsAdm.css'

import editar from '../../assets/img/editar-texto16.png';
import excluir from '../../assets/img/excluir.png';
// bootstrap
//import Form from 'react-bootstrap/Form'
//import FloatingLabel from 'react-bootstrap/Form'

class ProfsAdm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProfessores: [],
            idProfessorAlterado: 0,
            nomeProfessor: '',
            sobrenomeProfessor: '',
            telefoneProfessor: '',
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

    componentDidMount() {
        this.mudaCor();
        this.mudaMenu();
        this.buscarProfessores();
    }

    funcaoMudaState = async (campo) => {
        await this.setState({ [campo.target.name]: campo.target.value })
    }

    buscarProfessores = () => {
        // http:/34.193.56.51
        axios('http://44.198.139.189/api/Professor/list', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ listaProfessores: resposta.data.data })
                    console.log(this.state.listaProfessores)
                }
            })
            .catch(erro => console.log(erro))
    }

    buscarProfessorPorId = (professor) => {
        this.setState({
            idProfessorAlterado: professor.id,
            nomeProfessor: '',
            sobrenomeProfessor: '',
            telefoneProfessor: '',

        }, () => {
            console.log(
                'Turma ' + professor.id + ' selecionada',
                'valor de idProfessorAlterado: ' + this.state.idProfessorAlterado
            )
        })
    }

    excluirProfessor = (professor) => {
        fetch('http://44.198.139.189/api/Professor/delete', {
            method: 'DELETE',
            body: JSON.stringify({ id: this.state.idProfessorAlterado }),
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        })

            .then(response => {
                if (response.status == 204) {
                    console.log(response)
                    console.log("excluido com sucesso")
                    console.log(this.state.listaProfessores)
                }
            })

            .catch(erro => {
                console.log(erro)
            })
    }

    limparCampos = () => {
        this.setState({
            idProfessorAlterado: 0,
            nomeProfessor: '',
            sobrenomeProfessor: '',
            telefoneProfessor: '',
        })

        console.log('states resetados')
    }

    render() {
        return (
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
                                <form className="formulario-profs" onSubmit={this.cadastrarProfessores}>
                                    <div className="esquerda-profs">
                                        <div className="text-input">
                                            <label>Nome</label>
                                            <textarea id="nome" placeholder="Insira o nome do professor" value={this.state.nomeProfessor} name="nomeProfessor" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Sobrenome</label>
                                            <textarea id="sobrenome" placeholder="Insira o sobrenome do professor" value={this.state.sobrenomeProfessor} name="sobrenomeProfessor" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                    </div>
                                    <div className="direita-profs">
                                        <div className="text-input">
                                            <label>Telefone</label>
                                            <textarea id="telefone" placeholder="Insira o telefone aqui" value={this.state.telefoneProfessor} name="telefoneProfessor" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        {this.state.idProfessorAlterado === 0 ? (
                                            <button className="btn-cadastrar-turmas" type="submit">Cadastrar Turma</button>
                                        ) : (
                                            <button className="btn-cadastrar-turmas" type="submit">Editar Turma</button>

                                        )
                                        }
                                        {(() => {
                                            if (this.state.idProfessorAlterado != 0) {
                                                return (
                                                    <button type="submit" onClick={this.limparCampos}>Cancelar Edição</button>
                                                )
                                            }
                                        })()}
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
                                    </tr>
                                </thead>
                                <tbody className="table-body-profs">
                                    {
                                        this.state.listaProfessores.map((professor) => {
                                            return (
                                                <tr key={professor.id}>
                                                    <td>{professor.nomeProfessor}</td>
                                                    <td>{professor.sobrenome}</td>
                                                    <td>{professor.telefone}</td>
                                                    <td><img src={editar} width="30" height="30" onClick={() => this.buscarTurmaPorId(professor)} /></td>
                                                    <td><img src={excluir} width="30" height="30" onClick={() => this.excluirTurma(professor)} /></td>
                                                </tr>
                                            )
                                        })
                                    }
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