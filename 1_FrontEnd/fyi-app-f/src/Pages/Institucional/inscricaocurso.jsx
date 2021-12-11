import React, { Component, useRef } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';



import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/buttom';

import crs from '../../assets/img/Card Curso.png';
import cur from '../../assets/img/curso.png';
import dat from '../../assets/img/data.png';
import dur from '../../assets/img/duracao.png';
import cat from '../../assets/img/categoria.png';

import '../../assets/styles/inscricaocurso.css';
import Turmas from './turmas';




class InscricaoCurso extends Component {


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
   
        this.buscarTurmas();
    }

    componentDidUpdate() {
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
            cursoTurma: this.state.cursoTurma,
            professorTurma: this.state.professorTurma,
            dataIncio: this.state.dataInicio,
            dataFim: this.state.dataFim,
            descricao: this.state.descricao,
            preRequisito: this.state.preRequisito,
            publicoAlvo: this.state.publicoAlvo
        }

        console.log(obj)

        if (this.state.idTurmaAlterada != 0) {
            fetch('http://44.198.139.189/api/Turmas/update', {
                method: 'PATCH',
                body: JSON.stringify({ id: this.state.idTurmaAlterada, nomeTurma: this.state.nomeTurma, cargaHoraria: this.state.cargaHoraria, cursoTurma: this.state.cursoTurma, professorTurma: this.state.professorTurma, dataIncio: this.state.dataInicio, dataFim: this.state.dataFim, descricao: this.state.descricao, preRequisito: this.state.preRequisito, publicoAlvo: this.state.publicoAlvo }),
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
                body: JSON.stringify({ nomeTurma: this.state.nomeTurma, cargaHoraria: this.state.cargaHoraria, cursoTurma: this.state.cursoTurma, professorTurma: this.state.professorTurma, dataIncio: this.state.dataInicio, dataFim: this.state.dataFim, descricao: this.state.descricao, preRequisito: this.state.preRequisito, publicoAlvo: this.state.publicoAlvo }),
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

     

    funcaoMudaState = async (campo) => {
        await this.setState({ [campo.target.name]: campo.target.value })
    }



   
   


render() {

      

    return (
        <>
            <main className="container">
                <Header />
                <div className="alinhamento">



                    <section className="inscricao">
                        <h2 className="tituloInsc">Preencha as informações abaixo para efetuar a inscrição na turma:</h2>
                        <div className="formContent">
                            <div className="form2">

                                
                                
                            <label>Nome</label>
                            <input className="input" type="text" name="sobrenome" placeholder="Nome" />

                            <label>Email</label>
                            <input  className="input" type="email" name="email" placeholder="Email" id="email"/>




                              

 
                            </div>
                        </div>
                    </section>

                </div>

            </main>
            <Footer />
        </>
    )
}
};
export default InscricaoCurso;


                                    {/* <select name="cars" className="turma-select" id="cars" value={this.state.nomeTurma} name="cursoTurma" onChange={this.funcaoMudaState}>
                                        {this.state.listaCursos.map(cursos => {
                                            return (
                                                <option value={cursos.id}>{cursos.nomeCurso}</option>
                                            )
                                        })}
                                    </select> */}
