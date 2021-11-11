import React, {Component} from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/buttom';

import crs from '../../assets/img/Card Curso.png';

import '../../assets/styles/inscricaocurso.css';

class InscricaoCurso extends Component{
    render(){
        return(
            <>
            <main className="container">
                <Header/>
                <div className="Alinhamento">
                    <section className="sobreCurso">
                        <div className="informCurso">
                            <h1 className="tituloCurso">Power BI Completo:</h1>
                            <p className="descCurso">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <article className="imgCurso">
                            <img src={crs}/>
                        </article>
                    </section>
                    <section className="inscricao">
                        <h2 className="tituloInsc">Preencha as informações abaixo para efetuar a inscrição na turma:</h2>
                        <div className="formContent">
                            <div className="form2">
                                <input className="input" type="text" name="name" placeholder="Nome"/><br></br>
                                <input className="input" type="text" name="sobrenome" placeholder="Sobrenome"/><br></br>
                                <input className="input" type="Email" name="email"  placeholder="E-mail"/><br></br>
                                <input className="input" type="text" name="data" placeholder="Data de nascimento"/><br></br>
                                <input className="input" type="text" name="telefone" placeholder="Telefone"/>
                                <div className="botao-cl">
                                    <Button>Inscreva-se</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
            </>
        )
    }
};
export default InscricaoCurso;