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
import Contato from "./Pages/Institucional/contato.jsx";
import Turmas from "./Pages/Institucional/turmas.jsx";
import Duvidas from "./Pages/Institucional/duvidas.jsx";


//import adm
import Login from './Pages/Administrador/login.jsx';
import TurmasAdm from './Pages/Administrador/turmas';
import CursosAdm from './Pages/Administrador/cursos-adm';
import AlunosAdm from './Pages/Administrador/alunos-adm';
import ProfsAdm from './Pages/Administrador/profs-adm';


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/perguntas-frequentes" component={Duvidas} />
        <Route exact path="/contato-duvidas" component={Contato} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/cursos" component={Turmas} />

        <Route exact path="/adm/turmas" component={TurmasAdm} />
        <Route exact path="/adm/cursos" component={CursosAdm} />
        <Route exact path="/adm/alunos" component={AlunosAdm} />
        <Route exact path="/adm/professores" component={ProfsAdm} />
      </Switch>
    </div>
  </Router>
);

reactDom.render(routing, document.getElementById("root"));
