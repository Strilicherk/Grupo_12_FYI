import React, {Component} from 'react';
import axios from 'axios';

// components
import Header from '../../components/header';
import Menu from '../../components/menu';

// estilos
import '../../assets/styles/adm/profsAdm.css'

// bootstrap
//import Form from 'react-bootstrap/Form'
//import FloatingLabel from 'react-bootstrap/Form'

class ProfsAdm extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaProfessores: [],
            nomeProfessor: '',
            sobrenomeProfessor: '',
            telefoneProfessor: '',
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

    funcaoMudaState = async (campo) => {
        await this.setState({ [campo.target.name]: campo.target.value })
    }

    componentDidMount(){
        this.mudaCor();
        this.mudaMenu();
        this.buscarProfessores();
    }

    cadastrarProfessores = async (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/Turmas/register', {
            method: 'POST',

            body: JSON.stringify({ nomeProfessor: this.state.nomeProfessor, sobrenomeProfessor: this.state.sobrenomeProfessor, telefone: this.state.telefoneProfessor }),

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        }) 

        .then(resposta => {if (resposta.status == 200) {
            console.log("cadastro")
            console.log(this.state.listaProfessores)
        }})

        .then(this.buscarProfessores())

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
                                    <button className="btn-cadastrar-profs" type="submit">Cadastrar Professor</button>
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
                                            return(
                                                <tr key={professor.id}>    
                                                    <td>{professor.nomeProfessor}</td>
                                                    <td>{professor.sobrenome}</td>
                                                    <td>{professor.telefone}</td>
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