import React from 'react';
import './index.css';
import App from './Pages/Institucional/home';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import reactDom from 'react-dom';
import Home from './Pages/Institucional/home.jsx';
import Cursos from './Pages/Institucional/cursos.jsx';
import Processo from './Pages/Institucional/processo.jsx';
import Contato from './Pages/Institucional/contato.jsx';
import Login from './Pages/Administrador/login.jsx';
import Turmas from './Pages/Institucional/turmas.jsx';

const routing = ( 

    <Router >
    <div>
    <Switch >

    <Route exact path = "/" component = { Home }/> 
    <Route exact path = "/cursos" component = { Cursos }/> 
    <Route exact path = "/processo-seletivo" component = { Processo }/> 
    <Route exact path = "/contato-duvidas" component = { Contato }/> 
    <Route exact path = "/Login" component = { Login }/>
    <Route exact path = "/turmas" component = { Turmas }/>

    </Switch> </div> 
    </Router>

)

reactDom.render(routing, document.getElementById('root'))