import React, {Component} from 'react';
import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/turmasAdm.css';

// bootstrap
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/Form'

class Turmas extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listaTurmas: [],
            listaCursos: [],
            listaProfessores: [],
            nomeTurma: '',
            tamanhoTurma: '',
            cursoTurma: '',
            professorTurma: '',
            dataIncio: '',
            dataFim: '',
            descricao: '',
            preRequisito: '',
            publicoAlvo: '',
        }
    }
    

    buscarTurmas = () => {
        axios('http://localhost:5000/v1/classroom/list', {
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

    buscarCursos = () => {
        axios('http://localhost:5000/v1/course/list', {
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
        axios('http://localhost:5000/v1/professor/list', {
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

    atualizaEstadoNomeTurma = async (event) => {
        await this.setState({ nomeTurma: event.target.value })
        console.log(this.state.nomeTurma)
    }

    atualizaEstadoTamanhoTurma = async (event) => {
        await this.setState({ tamanhoTurma: event.target.value })
        console.log(this.state.tamanhoTurma)
    }

    atualizaEstadoCursoTurma = async (event) => {
        await this.setState({ cursoTurma: event.target.value })
        console.log(this.state.cursoTurma)
    }

    atualizaEstadoProfessorTurma = async (event) => {
        await this.setState({ professorTurma: event.target.value })
        console.log(this.state.professorTurma)
    }

    atualizaEstadoDataInicio = async (event) => {
        await this.setState({ dataIncio: event.target.value })
        console.log(this.state.dataIncio)
    }

    atualizaEstadoDataFim = async (event) => {
        await this.setState({ dataFim: event.target.value })
        console.log(this.state.dataFim)
    }

    atualizaEstadoDescricao = async (event) => {
        await this.setState({ descricao: event.target.value })
        console.log(this.state.descricao)
    }

    atualizaEstadoPreRequisito = async (event) => {
        await this.setState({ preRequisito: event.target.value })
        console.log(this.state.preRequisito)
    }

    atualizaEstadoPublicoAlvo = async (event) => {
        await this.setState({ publicoAlvo: event.target.value })
        console.log(this.state.publicoAlvo)
    }

    render(){
        return(
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
                                <form className="formulario">
                                    <div className="esquerda">
                                        <div className="text-input">
                                            <label>Nome da turma</label>
                                            <textarea id="nome" placeholder="Insira o nome da turma" value={this.state.nomeTurma} onChange={this.atualizaEstadoNomeTurma}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Tamanho</label>
                                            <textarea id="tamanho" placeholder="Insira o limite de alunos da turma" value={this.state.tamanhoTurma} onChange={this.atualizaEstadoTamanhoTurma}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Curso</label>
                                            <select name="cars" id="cars" value={this.state.cursoTurma} onChange={this.atualizaEstadoCursoTurma}>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                        <div className="text-input">
                                            <label>Professores</label>
                                            <select name="cars" id="cars" value={this.state.professorTurma} onChange={this.atualizaEstadoProfessorTurma}>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                        {/* <input placeholder="Nome"/>
                                        <input placeholder="Curso"/>
                                        <input placeholder="Quant. Alunos"/>
                                        <input placeholder="Professor"/>
                                        <input placeholder="Tamanho"/> */}
                                        <div className="datas">
                                            <div className="data-inicio">
                                                <label>Data de início</label>
                                                <input type="date" value={this.state.dataIncio} onChange={this.atualizaEstadoDataInicio}/> 
                                            </div>
                                            <div className="hl"/>
                                            <div className="data-fim">
                                                <label>Data de término</label>
                                                <input type="date" value={this.state.dataFim} onChange={this.atualizaEstadoDataFim}/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="direita">
                                        <div className="text-input">
                                            <label>Descrição</label>
                                            <textarea id="descricao" placeholder="Escreva a sua descrição aqui" value={this.state.descricao} onChange={this.atualizaEstadoDescricao}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Pré-requisitos</label>
                                            <textarea placeholder="Escreva os pré-requisitos aqui" value={this.state.preRequisito} onChange={this.atualizaEstadoPreRequisito}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Público alvo</label>
                                            <textarea placeholder="Escreva o público alvo aqui" value={this.state.publicoAlvo} onChange={this.atualizaEstadoPublicoAlvo}></textarea>
                                        </div>
                                        <button className="btn-cadastrar-turmas">Cadastrar Turma</button>
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
                                        <th>Alunos / Max. Alunos</th>
                                        <th>Data de Início</th>
                                        <th>Data de Término</th>
                                        <th>Editar</th>
                                        <th>Excluir</th> 
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    {
                                        this.state.listaTurmas.map((turmas) => {
                                            return(
                                                <tr key={turmas.Id}>    

                                                </tr>
                                            )
                                        })
                                    }
                                    {/* <tr>
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
                                    </tr> */}
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