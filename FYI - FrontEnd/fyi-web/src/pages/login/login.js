import React, {Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : ''
        }
    };

    render(){
        return(
            <div>
                <main>
                    <section>
                        <p>Bem-vindo(a)! Faça o login para acessar a página</p>
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

                            <button type="submit">
                                Entrar
                            </button>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
};

export default Login;