import React, { Component } from 'react';
import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/adm/cursosAdm.css'

import editar from '../../assets/img/editar-texto16.png';
import excluir from '../../assets/img/excluir.png';

// bootstrap
//import Form from 'react-bootstrap/Form'
//import FloatingLabel from 'react-bootstrap/Form'

class CursosAdm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaCursos: [],
            idCursoAlterado: 0,
            nomeCurso: '',
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

    componentDidMount() {
        this.mudaCor();
        this.mudaMenu();
        this.buscarCursos();
    }

    cadastrarCursos = async (event) => {
        event.preventDefault();
        if (this.state.idCursoAlterado != 0) {
            fetch('http://34.193.56.51/api/Cursos/update', {
                method: 'PATCH',
                body: JSON.stringify({ id: this.state.idCursoAlterado, nomeCurso: this.state.nomeCurso }),
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                    "Content-Type": "application/json"
                }
            })
                .then(resposta => {
                    if (resposta.status === 204) {
                        console.log('Turma ' + this.state.idTurmaAlterada + 'atualizada')
                    }
                })
                .then(this.buscarTurmas())
        }
        else {
            // cadastro
            fetch('http://34.193.56.51/api/Cursos/register', {
                method: 'POST',
                body: JSON.stringify({ nomeCurso: this.state.nomeCurso }),
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.status == 200) {
                        console.log(response)
                        console.log("cadastro")
                        console.log(this.state.listaCursos)
                    }
                })

                .catch(erro => {
                    console.log(erro)
                })

                .then(this.buscarCursos())
        }
    }

    excluirCurso = (curso) => {
        fetch('http://34.193.56.51/api/Cursos/delete', {
            method: 'DELETE',
            body: JSON.stringify({ id: this.state.idCursoAlterado }),
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        })

            .then(response => {
                if (response.status == 204) {
                    console.log(response)
                    console.log("excluido com sucesso")
                    console.log(this.state.listaCursos)
                }
            })

            .catch(erro => {
                console.log(erro)
            })
    }

    buscarCursos = () => {
        axios('http://54.90.205.161/api/Cursos/list', {
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

    limparCampos = () => {
        this.setState({
            idCursoAlterado: 0,
            nomeCurso: '',
        })

        console.log('states resetados')
    }

    buscarCursoPorId = (curso) => {
        this.setState({
            idCursoAlterado: curso.id,
            nomeCurso: curso.nomeCurso,
        }, () => {
            console.log(
                'Curso ' + curso.id + ' selecionada',
                'valor de idCursoAlterado: ' + this.state.idCursoAlterado
            )
        })
    }

    funcaoMudaState = async (campo) => {
        await this.setState({ [campo.target.name]: campo.target.value })
    }

    render() {
        return (
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
                                <form className="formulario-cursos" onSubmit={this.cadastrarCursos}>
                                    <div className="esquerda-cursos">
                                        <div className="text-input">
                                            <label>Nome do curso</label>
                                            <textarea id="nome" placeholder="Insira aqui o nome do curso que deseja cadastrar" value={this.state.nomeCurso} name="nomeCurso" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        {this.state.idCursoAlterado === 0 ? (
                                            <button className="btn-cadastrar-cursos" type="submit">Cadastrar Curso</button>
                                        ) : (
                                            <button className="btn-cadastrar-cursos" type="submit">Editar Curso</button>

                                        )
                                        }
                                        {(() => {
                                            if (this.state.idCursoAlterado != 0) {
                                                return (
                                                    <button type="button" onClick={this.limparCampos}>Cancelar Edição</button>
                                                )
                                            }
                                        })()}
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
                                        <th>Editar</th>
                                        <th>Excluir</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body-cursos">
                                    {
                                        this.state.listaCursos.map((cursos) => {
                                            return (
                                                <tr key={cursos.Id}>
                                                    <td>{cursos.nomeCurso}</td>
                                                    <td><img src={editar} width="30" height="30" onClick={() => this.buscarCursoPorId(cursos)} /></td>
                                                    <td><img src={excluir} width="30" height="30" onClick={() => this.excluirCurso(cursos)} /></td>
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

export default CursosAdm;