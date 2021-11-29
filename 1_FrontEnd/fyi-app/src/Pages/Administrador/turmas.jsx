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
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            erroMenssagem : '',
            isLoading : false,
            listaTurmas: []
        }
    };

    buscarTurmas = () => {
        axios('http://localhost:5000/api/turmas/list', {
        //   headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
        //   }
        })
    
          .then(resposta => {
            if (resposta.status === 200) {
              this.setState({ listaTurmas: resposta.data })
              console.log(this.state.listaTurmas)
            }
          })
    
          .catch(erro => console.log(erro))
      }

      componentDidMount() {
          this.buscarTurmas();
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
                                            <label>Descrição</label>
                                            <textarea id="descricao" placeholder="Escreva a sua descrição aqui"></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Pré-requisitos</label>
                                            <textarea placeholder="Escreva os pré-requisitos aqui"></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Público alvo</label>
                                            <textarea placeholder="Escreva o público alvo aqui"></textarea>
                                        </div>
                                        {/* <input placeholder="Nome"/>
                                        <input placeholder="Curso"/>
                                        <input placeholder="Quant. Alunos"/>
                                        <input placeholder="Professor"/>
                                        <input placeholder="Tamanho"/>
                                        <div className="datas">
                                            <div className="data-inicio">
                                                <label>Data de início</label>
                                                <input type="date"/> 
                                            </div>
                                            <div className="hl"/>
                                            <div className="data-fim">
                                                <label>Data de término</label>
                                                <input type="date"/> 
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="direita">
                                        <div className="text-input">
                                            <label>Descrição</label>
                                            <textarea id="descricao" placeholder="Escreva a sua descrição aqui"></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Pré-requisitos</label>
                                            <textarea placeholder="Escreva os pré-requisitos aqui"></textarea>
                                        </div>
                                        <div className="text-input">
                                            <label>Público alvo</label>
                                            <textarea placeholder="Escreva o público alvo aqui"></textarea>
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