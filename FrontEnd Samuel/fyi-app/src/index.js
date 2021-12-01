import React from "react";
import "./index.css";
import App from "./Pages/Institucional/home";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import reactDom from "react-dom";



// import institucionais
import Home from "./Pages/Institucional/home.jsx";
import Cursos from "./Pages/Institucional/cursos.jsx";
import InscricaoCurso from './Pages/Institucional/inscricaocurso.jsx';
import Processo from "./Pages/Institucional/processo.jsx";
import Contato from "./Pages/Institucional/contato.jsx";
import Turmas from "./Pages/Institucional/turmas.jsx";
import Duvidas from "./Pages/Institucional/duvidas.jsx";


//import adm
import Login from './Pages/Administrador/login.jsx';
import TurmasAdm from './Pages/Administrador/turmas';
import CursosAdm from './Pages/Administrador/cursos-adm';
import AlunosAdm from './Pages/Administrador/alunos-adm';
import ProfsAdm from './Pages/Administrador/profs-adm';
import duvidas from "./Pages/Institucional/duvidas.jsx";



const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cursos" component={Cursos} />
        <Route exact path = "/inscricaocurso" component = { InscricaoCurso }/> 
        <Route exact path="/processo-seletivo" component={Processo} />
        <Route exact path="/contato-duvidas" component={Contato} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/turmas" component={Turmas} />
        <Route exact path="/perguntas-frequentes" component={duvidas} />

        <Route exact path="/adm/turmas" component={TurmasAdm} />
        <Route exact path="/adm/cursos" component={CursosAdm} />
        <Route exact path="/adm/alunos" component={AlunosAdm} />
        <Route exact path="/adm/professores" component={ProfsAdm} />
      </Switch>
    </div>
  </Router>
);

reactDom.render(routing, document.getElementById("root"));
