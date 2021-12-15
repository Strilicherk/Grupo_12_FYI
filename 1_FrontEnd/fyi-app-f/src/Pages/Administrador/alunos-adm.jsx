import React, { Component } from 'react';
import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/adm/alunosAdm.css'

// bootstrap
//import Form from 'react-bootstrap/Form'
//import FloatingLabel from 'react-bootstrap/Form'

class AlunosAdm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaTurmas: [],
            listaAlunos: [],
            nome: '',
            sobrenome: '',
            cpf: '',
            dataNascimento: '',
            telefone: '',
            idTurma: '',
            email: '',
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

    componentDidMount() {
        this.mudaCor();
        this.mudaMenu();
        this.buscarTurmas();
        this.buscarAlunos();
    }

    componentDidUpdate() {
        this.buscarAlunos();
    }

    funcaoMudaState = async (campo) => {
        await this.setState({ [campo.target.name]: campo.target.value })
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

    buscarAlunos = () => {
        axios('http://44.198.139.189/api/Aluno/list', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    this.setState({ listaAlunos: resposta.data.data })
                    console.log(this.state.listaAlunos)
                }
            })
            .catch(erro => console.log(erro))
    }

    cadastrarAlunos = async (event) => {
        event.preventDefault();
        {
            fetch('http://44.198.139.189/api/Aluno/register', {
                method: 'POST',
                body: JSON.stringify({
                    nome: this.state.nome,
                    sobrenome: this.state.sobrenome,
                    cpf: this.state.cpf,
                    dataNascimento: this.state.dataNascimento,
                    telefone: this.state.telefone,
                    idTurma: this.state.idTurma,
                    dataFim: this.state.dataFim,
                    email: this.state.email,
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
                        console.log(this.state.listaAlunos)
                    }
                })

                .catch(erro => {
                    console.log(erro)
                })
                .then(this.limparCampos())

                .then(this.buscarAlunos())
        }
    }

    limparCampos = () => {
        this.setState({
            nome: '',
            sobrenome: '',
            cpf: '',
            dataNascimento: '',
            telefone: '',
            idTurma: '',
            email: '',
        })

        console.log('states resetados')
    }

    render() {
        return (
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
                                        <div className="text-input">
                                            <label>Nome</label>
                                            <textarea id="nome" placeholder="Insira o nome da turma" value={this.state.nomeTurma} name="nomeTurma" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Sobrenome</label>
                                            <textarea id="nome" placeholder="Insira o nome da turma" value={this.state.nomeTurma} name="nomeTurma" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="professor-curso">
                                            <div className="select-aluno-aa">
                                                <label>Turma</label>
                                                <select className="select-aluno" name='select-turma' value={this.state.idTurma} name="idTurma" onChange={this.funcaoMudaState}>
                                                    <option value={''}>Selecione</option>
                                                    {this.state.listaTurmas.map(turmas => {
                                                        return (
                                                            <option value={turmas.id}>{turmas.nomeTurma}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="data-aluno-aa">
                                                <label>Data de nascimento</label>
                                                <input type="date" value={this.state.dataNascimento} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="direita-alunos">
                                        <div className="text-input">
                                            <label>CPF</label>
                                            <textarea id="nome" placeholder="Insira o nome da turma" value={this.state.nomeTurma} name="nomeTurma" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Telefone</label>
                                            <textarea id="nome" placeholder="Insira o nome da turma" value={this.state.nomeTurma} name="nomeTurma" onChange={this.funcaoMudaState}></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Email</label>
                                            <textarea id="nome" placeholder="Insira o nome da turma" value={this.state.nomeTurma} name="nomeTurma" onChange={this.funcaoMudaState}></textarea>
                                        </div>
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
                                        <th>Turma</th>
                                        <th>Data de Nascimento</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body-alunos">
                                    {
                                        this.state.listaAlunos.map((alunos) => {
                                            return(
                                                <tr key={alunos.id}>
                                                    <td>{alunos.nome}</td>
                                                    <td>{alunos.sobrenome}</td>
                                                    <td>{alunos.idTurma.nomeTurma}</td>
                                                    <td>{alunos.dataNascimento}</td>
                                                    <td>{alunos.cpf}</td>
                                                    <td>{alunos.telefone}</td>
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

export default AlunosAdm;