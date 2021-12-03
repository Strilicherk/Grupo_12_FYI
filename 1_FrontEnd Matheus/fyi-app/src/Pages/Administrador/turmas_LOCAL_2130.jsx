import React, {Component} from 'react';
import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/turmasAdm.css';

// bootstrap
//import Form from 'react-bootstrap/Form'
//import FloatingLabel from 'react-bootstrap/Form'

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

    buscarTurmas = () => {
        axios('http://localhost:5000/api/Turmas/list', {
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

        fetch('http://localhost:5000/api/Turmas/register', {
            method: 'POST',

            body: JSON.stringify({ nomeTurma: this.state.nomeTurma, tamanhoTurma: this.state.tamanhoTurma, cursoTurma: this.state.cursoTurma, professorTurma: this.state.professorTurma, dataIncio: this.state.dataIncio, dataFim: this.state.dataFim, descricao: this.state.descricao, preRequisito: this.state.preRequisito, publicoAlvo: this.state.publicoAlvo }),

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        }) 

        .then(resposta => {if (resposta.status == 200) {
            console.log("cadastro")
            console.log(this.state.listaTurmas)
        }})

        .then(this.buscarTurmas())

        .catch(erro => console.log(erro))

        // var turma = {
        //     nomeTurma : this.state.nomeTurma,
        //     tamanhoTurma : this.state.tamanhoTurma,
        //     cursoTurma : this.state.cursoTurma,
        //     professorTurma : this.state.professorTurma,
        //     dataIncio : this.state.dataIncio,
        //     dataFim : this.state.dataFim,
        //     descricao : this.state.descricao,
        //     preRequisito : this.state.preRequisito,
        //     publicoAlvo : this.state.publicoAlvo,
        // }

        // await axios.post('http://localhost:5000/api/Turmas/register', {
        //     nomeTurma : this.state.nomeTurma,
        //     tamanhoTurma : this.state.tamanhoTurma,
        //     cursoTurma : this.state.cursoTurma,
        //     professorTurma : this.state.professorTurma,
        //     dataIncio : this.state.dataInicio,
        //     dataFim : this.state.dataFim,
        //     descricao : this.state.descricao,
        //     preRequisito : this.state.preRequisito,
        //     publicoAlvo : this.state.publicoAlvo}
        //     , 
        //     {
        //     headers : {
        //         'Authorization' : 'Bearer ' + localStorage.getItem('user-token')
        //     }
        // })

        // .then(resposta => {if (resposta.status == 200) {
        //     console.log("cadastro")
        //     console.log(this.state.listaTurmas)
        // }})

        // .catch(erro => console.log(erro))
    }

    buscarCursos = () => {
        axios('http://localhost:5000/api/Cursos/list', {
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
        axios('http://localhost:5000/api/Professor/list', {
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

    funcaoMudaState = async (campo) => {
        await this.setState({ [campo.target.name]: campo.target.value })
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
                                <form className="formulario" onSubmit={this.cadastrarTurmas}>
                                    <div className="esquerda">
                                        <div className="text-input">
                                            <label>Nome da turma</label>
                                            <textarea id="nome" placeholder="Insira o nome da turma" value={this.state.nomeTurma} name="nomeTurma" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Tamanho</label>
                                            <textarea id="tamanho" placeholder="Insira o limite de alunos da turma" value={this.state.tamanhoTurma} name="tamanhoTurma" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Curso</label>
                                            <select name="cars" id="cars" value={this.state.cursoTurma} name="cursoTurma" onChange={this.funcaoMudaState}>
                                                {this.state.listaCursos.map(cursos => {
                                                    return(
                                                        <option value={cursos.id}>{cursos.nomeCurso}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="text-input">
                                            <label>Professores</label>
                                            <select name="cars" id="cars" value={this.state.professorTurma} name="professorTurma" onChange={this.funcaoMudaState}>
                                                {this.state.listaProfessores.map(professores => {
                                                    return(
                                                        <option value={professores.id}>{professores.nomeProfessor}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="datas">
                                            <div className="data-inicio">
                                                <label>Data de início</label>
                                                <input type="date" value={this.state.dataInicio} name="dataInicio" onChange={this.funcaoMudaState}/> 
                                            </div>
                                            <div className="hl"/>
                                            <div className="data-fim">
                                                <label>Data de término</label>
                                                <input type="date" value={this.state.dataFim} name="dataFim" onChange={this.funcaoMudaState}/> 
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
                                        <button className="btn-cadastrar-turmas" type="submit">Cadastrar Turma</button>
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
                                                    <td>{turmas.nomeTurma}</td>
                                                    <td>{turmas.idCurso}</td>
                                                    <td>{turmas.idProfessor}</td>
                                                    <td>{turmas.quantidadeAluno} / {turmas.qtdMax}</td>
                                                    <td>{turmas.dataInicio}</td>
                                                    <td>{turmas.dataFim}</td>
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