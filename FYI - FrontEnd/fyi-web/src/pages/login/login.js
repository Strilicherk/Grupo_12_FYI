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
                <main>
                    <section>
                        <p>Bem-vindo(a)! Faça o login para acessar a página.</p>
                        <form onSubmit={this.efetuaLogin}>

                            <input type="text" 
                                   name="email" 
                                   value={this.state.email} 
                                   onChange={this.atualizaStateCampo}
                                   placeholder="Email"
                            />

                            <input type="password" 
                                   name="senha" 
                                   value={this.state.senha} 
                                   onChange={this.atualizaStateCampo}
                                   placeholder="Senha"
                            />

                            <p>{this.state.erroMenssagem}</p>

                            {
                                this.state.isLoading === true &&
                                <button type="submit" disabled>Carregando...</button>
                            }
                            {
                                this.state.isLoading === false &&
                                <button type="submit" disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}>
                                    Entrar
                                </button>
                            }

                            {/* <button type="submit">
                                Entrar
                            </button> */}
                        </form>
                    </section>
                </main>
            </div>
        )
    }
};

export default Login;