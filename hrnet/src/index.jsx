import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

//Components
import Header from './components/Header';

//Page
import CreateEmployee from "./pages/CreateEmployee"
import CurrentEmployees from "./pages/CurrentEmployees"

//Styles
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Switch>
          <Route exact path = "/" component = { CreateEmployee } />
          <Route exact path = "/current-employees" component = { CurrentEmployees } />
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
