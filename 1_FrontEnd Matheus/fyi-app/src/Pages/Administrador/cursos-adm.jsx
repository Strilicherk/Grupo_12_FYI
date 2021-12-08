import React, {Component} from 'react';
import axios from 'axios';

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
            listaCursos: [],
            nomeCurso: '',
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
        this.buscarCursos();
        this.cadastrarCursos();
    }

    cadastrarCursos = async (event) => {
        // event.preventDefault();
        
        fetch('http://54.90.205.161/api/Cursos/register', {
            method: 'POST',

            body: JSON.stringify({ nomeCurso: this.state.nomeCurso}),

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('user-token'),
                "Content-Type": "application/json"
            }
        }) 

        .then(resposta => {if (resposta.status == 200) {
            console.log("cadastro")
            console.log(this.state.listaCursos)
        }})

        .then(this.buscarCursos())

        .catch(erro => console.log(erro))
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
                                <form className="formulario-cursos" onSubmit={this.cadastrarCursos}>
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
                                        <th>Editar</th>
                                        <th>Excluir</th> 
                                    </tr>
                                </thead>
                                <tbody className="table-body-cursos">
                                {
                                        this.state.listaCursos.map((cursos) => {
                                            return(
                                                <tr key={cursos.Id}>    
                                                    <td>{cursos.nomeCurso}</td>
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