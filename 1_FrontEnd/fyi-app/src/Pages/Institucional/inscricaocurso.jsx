import React, {Component} from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/buttom';

import crs from '../../assets/img/Card Curso.png';
import cur from '../../assets/img/curso.png';
import dat from '../../assets/img/data.png';
import dur from '../../assets/img/duracao.png';
import cat from '../../assets/img/categoria.png';

import '../../assets/styles/inscricaocurso.css';

class InscricaoCurso extends Component{
    render(){
        return(
            <>
            <main className="container">
                <Header/>
                <div className="alinhamento">
                   

                    <section className="inscricao">
                        
                        <p className="tituloInsc">Prencha seus dados para poder se increver no curso com o seu email</p>

                        <div className="formContent">
                            <div className="form2">
                                <input className="input" type="text" name="name" placeholder="Nome"/><br></br>
                                <input className="input" type="text" name="sobrenome" placeholder="Sobrenome"/><br></br>
                                <input className="input" type="Email" name="email"  placeholder="E-mail"/><br></br>                              
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