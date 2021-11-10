import React, {Component} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import '../../assets/styles/inscricaocurso.css';

class InscricaoCurso extends Component{
    render(){
        return(
            <>
            <main className="container">
                <Header/>
                <div className="contentAlinhamento">
                    <section className="sobreCurso">

                    </section>
                    <section className="inscricao">

                    </section>
                </div>
            </main>
            <Footer/>
            </>
        )
    }
};
export default InscricaoCurso;