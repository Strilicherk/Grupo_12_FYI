import React, {Component} from 'react';
import axios from 'axios';

import '../../assets/css/login.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            erroMenssagem : '',
            isLoading : false
        }
    };

    efetuaLogin = (event) => {
        event.preventDefault();

        this.setState({ erroMenssagem : '', isLoading : true })

        axios.post('http://localhost:5000/api/login', {
            email : this.state.email,
            senha : this.state.senha
        })

        .then(resposta => {
            if (resposta.status === 200) {
                localStorage.setItem('adm-login', resposta.data.token)

                console.log('Meu token é: ' + resposta.data.token)

                this.setState({ isLoading : false })
            }
        })

        .catch(() => {
            this.setState({ erroMenssagem : 'Email ou senha inválidos!', isLoading : false })
        })

    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    }

    render(){
        return(
            <div>
                <main className = "bgimg">
                    <section>
                       <div className ="tudo">
                           <div className= "logo"/>

                            <form onSubmit={this.efetuaLogin} className="form">
                                <p>Email:</p>
                                <input type="text" 
                                    name="email" 
                                    value={this.state.email} 
                                    onChange={this.atualizaStateCampo}                                   
                                className="inserirDados"/>
                                
                                <p>Senha:</p>
                                <input type="password" 
                                    name="senha" 
                                    value={this.state.senha} 
                                    onChange={this.atualizaStateCampo}
                                className="inserirDados"/>

                                <p>{this.state.erroMenssagem}</p>

                                {
                                    this.state.isLoading === true &&
                                    <button type="submit" disabled className="botaoEntrar">Carregando...</button>
                                }
                                {
                                    this.state.isLoading === false &&
                                    <button type="submit" disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''} className="botaoEntrar">
                                        Entrar
                                    </button>
                                }

                                {/* <button type="submit">
                                    Entrar
                                </button> */}
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
};

export default Login;