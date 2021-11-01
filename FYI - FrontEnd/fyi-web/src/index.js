import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import './index.css';

import App from './pages/home/App';
import Login from './pages/login/login';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// reportWebVitals(); 

