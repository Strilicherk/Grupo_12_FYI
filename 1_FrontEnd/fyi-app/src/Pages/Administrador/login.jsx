import React, {Component} from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';

import logo from '../../assets/img/logo1branca.svg'

import '../../assets/styles/login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            erroMensagem : '',
            isLoading : false
        }
    };

    efetuaLogin = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem : '', isLoading : true })

        axios.post('http://44.198.139.189/v1/account/signin', {
            email : this.state.email,
            senha : this.state.senha
        })

        .then(resposta => {
            if (resposta.status === 200) {
                localStorage.setItem('adm-login', resposta.data.data.token)

                // console.log('Meu Token é: ' + resposta.data.data.token)

                this.setState({ isLoading : false })

                console.log( parseJwt().role);

                if (parseJwt().role === 'Admin') {
                    this.props.history.push('/adm/turmas');
                }
            }
        })

        .catch(() => {
            this.setState({ erroMensagem : 'Email ou senha inválidos!', isLoading : false })
        })

    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    }

    render(){
        return(
            <div>
                <main className="bg-aling">
                    <section  className = "bgimg" >
                       <div className ="tudo">
                            
                       <img className= "logo" src={logo} />
                            

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

                                <p style={{ color : 'red', fontWeight : '500' }} >{this.state.erroMensagem}</p>

                                {
                                    this.state.isLoading === true &&
                                    <button type="submit" disabled className="botaoEntrar">Loading...</button>
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