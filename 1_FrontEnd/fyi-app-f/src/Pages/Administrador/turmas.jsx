import React, { Component } from 'react';
import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/adm/turmasAdm.css';

// imgs
import editar from '../../assets/img/editar-texto16.png';
import excluir from '../../assets/img/excluir.png';
import mais from '../../assets/img/mais.png';
// bootstrap
//import Form from 'react-bootstrap/Form'
//import FloatingLabel from 'react-bootstrap/Form'

class Turmas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaTurmas: [],
            listaCursos: [],
            listaProfessores: [],
            idTurmaSelecionada: '',
            idTurmaAlterada: 0,
            nomeTurma: '',
            cargaHoraria: '',
            idCurso: '',
            idProfessor: '',
            dataInicio: '',
            dataFim: '',
            descricao: '',
            preRequisito: '',
            publicoAlvo: '',
        }
    }

    componentDidMount() {
        this.buscarCursos();
        this.buscarProfessores();
        this.buscarTurmas();
    }

    componentDidUpdate(){
        this.buscarTurmas();
    }

    chamarAlert = async (turma) => {
        await this.setState({
            idTurmaSelecionada: turma.idTurmaSelecionada,
            descricao: turma.descricao,
            preRequisito: turma.preRequisito,
            publicoAlvo: turma.publicoAlvo
        })
        console.log(turma)
    }

    buscarTurmas = () => {
        axios('http://44.198.139.189/api/Turmas/list', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ listaTurmas: resposta.data.data })
                    console.log(this.state.listaTurmas)
                }
            })
            .catch(erro => console.log(erro))
    }

    cadastrarTurmas = async (event) => {
        event.preventDefault();

        const obj = {
            id: this.state.idTurmaAlterada, 
            nomeTurma: this.state.nomeTurma, 
            cargaHoraria: this.state.cargaHoraria, 
            idCurso: this.state.idCurso, 
            idProfessor: this.state.idProfessor, 
            dataIncio: this.state.dataInicio, 
            dataFim: this.state.dataFim, 
            descricao: this.state.descricao, 
            preRequisito: this.state.preRequisito, 
            publicoAlvo: this.state.publicoAlvo
        }
        
        await console.log(obj)

        if (this.state.idTurmaAlterada != 0) {
            fetch('http://44.198.139.189/api/Turmas/update', {
                method: 'PATCH',
                body: JSON.stringify({ 
                    id: this.state.idTurmaAlterada, 
                    nomeTurma: this.state.nomeTurma, 
                    cargaHoraria: this.state.cargaHoraria, 
                    idCurso: this.state.idCurso, 
                    idProfessor: this.state.idProfessor, 
                    dataInicio: this.state.dataInicio, 
                    dataFim: this.state.dataFim, 
                    descricao: this.state.descricao, 
                    preRequisito: this.state.preRequisito, 
                    publicoAlvo: this.state.publicoAlvo
                }),
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
            fetch('http://44.198.139.189/api/Turmas/register', {
                method: 'POST',
                body: JSON.stringify({ 
                    id: this.state.idTurmaAlterada, 
                    nomeTurma: this.state.nomeTurma, 
                    cargaHoraria: this.state.cargaHoraria, 
                    idCurso: this.state.idCurso, 
                    idProfessor: this.state.idProfessor, 
                    dataInicio: this.state.dataInicio, 
                    dataFim: this.state.dataFim, 
                    descricao: this.state.descricao, 
                    preRequisito: this.state.preRequisito, 
                    publicoAlvo: this.state.publicoAlvo
                }),
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.status == 200) {
                        console.log(response)
                        console.log("cadastro")
                        console.log(this.state.listaTurmas)
                    }
                })

                .catch(erro => {
                    console.log(erro)
                })

                .then(this.buscarTurmas())
        }
    }

    buscarCursos = () => {
        axios('http://44.198.139.189/api/Cursos/list', {
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

    buscarTurmaPorId = (turma) => {
        this.setState({
            idTurmaAlterada: turma.id,
            nomeTurma: turma.nomeTurma,
            cargaHoraria: turma.cargaHoraria,
            idCurso: turma.idCurso,
            idProfessor: turma.idProfessor,
            dataInicio: turma.dataInicio,
            dataFim: turma.dataFim,
            descricao: turma.descricao,
            preRequisito: turma.preRequisito,
            publicoAlvo: turma.publicoAlvo,

        }, () => {
            console.log(
                'Turma ' + turma.id + ' selecionada',
                'valor de idTurmaAlterada: ' + this.state.idTurmaAlterada
            )
        })
    }

    buscarIdExcluir = async (event) => {
        await this.setState({ idTurmaAlterada: event.id })

        if (this.state.idTurmaAlterada != 0) {
            this.excluirTurma()
        }
    }

    funcaoMudaState = async (campo) => {
        await this.setState({ [campo.target.name]: campo.target.value })
    }

    excluirTurma = async () => {
        fetch('http://44.198.139.189/api/Turmas/delete', {
            method: 'DELETE',
            body: JSON.stringify({ id: this.state.idTurmaAlterada }),
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        })

            .then(
                console.log(this.state.idTurmaAlterada)
            )

            .then(response => {
                if (response.status == 200) {
                    console.log(response)
                    console.log("excluido com sucesso")
                    console.log(this.state.listaTurmas)

                    this.buscarTurmas();
                }
            })

            .catch(erro => {
                console.log(erro)
            })


    }

    limparCampos = () => {
        this.setState({
            idTurmaAlterada: 0,
            nomeTurma: '',
            cargaHoraria: '',
            idCurso: '',
            idProfessor: '',
            dataInicio: '',
            dataFim: '',
            descricao: '',
            preRequisito: '',
            publicoAlvo: '',
        })

        console.log('states resetados')
    }

    render() {
        return (
            <main>
                <section className="turmas-header">
                    <div className="header-content">
                        <Header />
                    </div>
                </section>
                <section className="center">
                    <div className="center-content">
                        <div className="side-menu">
                            <Menu />
                        </div>
                        <div className="side-content">
                            <h1>Cadastrando Turmas</h1>
                            <div className="form-content">
                                <form className="formulario" onSubmit={this.cadastrarTurmas}>
                                    <div className="esquerda">
                                        <div className="text-input">
                                            <label>Nome da turma</label>
                                            <textarea id="nome" placeholder="Insira o nome da turma" value={this.state.nomeTurma} name="nomeTurma" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Carga horária</label>
                                            <input type="number" class="carga-horaria" id="carga horária" value={this.state.cargaHoraria} name="cargaHoraria" onChange={this.funcaoMudaState}></input>
                                        </div>
                                        <div className="professor-curso">
                                            <div className="text-input curso-professor">
                                                <label>Curso</label>
                                                <select name="cars" id="cars" value={this.state.idCurso} name="idCurso" onChange={this.funcaoMudaState}>
                                                    {this.state.listaCursos.map(cursos => {
                                                        return (
                                                            <option value={cursos.id}>{cursos.nomeCurso}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="text-input curso-professor">
                                                <label>Professores</label>
                                                <select name="cars" id="cars" value={this.state.idProfessor} name="idProfessor" onChange={this.funcaoMudaState}>
                                                    {this.state.listaProfessores.map(professores => {
                                                        return (
                                                            <option value={professores.id}>{professores.nomeProfessor} {professores.sobrenome}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="datas">
                                            <div className="data-inicio">
                                                <label>Data de início</label>
                                                <input type="date" value={this.state.dataInicio} name="dataInicio" onChange={this.funcaoMudaState} />
                                            </div>
                                            <div className="hl" />
                                            <div className="data-fim">
                                                <label>Data de término</label>
                                                <input type="date" value={this.state.dataFim} name="dataFim" onChange={this.funcaoMudaState} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="direita">
                                        <div className="text-input">
                                            <label>Descrição</label>
                                            <textarea id="descricao" placeholder="Escreva a sua descrição aqui" value={this.state.descricao} name="descricao" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Pré-requisitos</label>
                                            <textarea placeholder="Escreva os pré-requisitos aqui" value={this.state.preRequisito} name="preRequisito" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Público alvo</label>
                                            <textarea placeholder="Escreva o público alvo aqui" value={this.state.publicoAlvo} name="publicoAlvo" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        {this.state.idTurmaAlterada === 0 ? (
                                            <button className="btn-cadastrar-turmas" type="submit">Cadastrar Turma</button>
                                        ) : (
                                            <button className="btn-cadastrar-turmas" type="submit">Editar Turma</button>

                                        )
                                        }
                                        {(() => {
                                            if (this.state.idTurmaAlterada != 0) {
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
                <section className="table-section">
                    <div className="table-content">
                        <h1>Listando Turmas</h1>
                        <div className="table-info">
                            <table className="table-settings">
                                <thead className="table-header">
                                    <tr id="topo">
                                        <th>Nome</th>
                                        <th>Curso</th>
                                        <th>Professor</th>
                                        <th>Carga Horária</th>
                                        <th>Data de Início</th>
                                        <th>Data de Término</th>
                                        <th>Editar</th>
                                        <th>Excluir</th>
                                        <th>Mais</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    {
                                        this.state.listaTurmas.map((turmas) => {
                                            return (
                                                <tr key={turmas.Id}>
                                                    <td>{turmas.nomeTurma}</td>
                                                    <td>{turmas.curso.nomeCurso}</td>
                                                    <td>{turmas.professor.nomeProfessor} {turmas.professor.sobrenome}</td>
                                                    <td>{turmas.cargaHoraria}</td>
                                                    <td>{turmas.dataInicio}</td>
                                                    <td>{turmas.dataFim}</td>
                                                    <td><img src={editar} width="30" height="30" onClick={() => this.buscarTurmaPorId(turmas)} /></td>
                                                    <td><img src={excluir} width="30" height="30" onClick={() => this.buscarIdExcluir(turmas)} /></td>
                                                    <td><img src={mais} width="30" height="30" onClick={() => this.chamarAlert(turmas)} /></td>
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


export default Turmas;