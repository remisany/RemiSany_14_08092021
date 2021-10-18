import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

//Store
import store from "./utils/store";

//Components
import Header from './components/Header';

//Page
import CreateEmployee from "./pages/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees";

//Styles
import './styles/index.css';

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <Router>
        <Header />
          <Switch>
            <Route exact path = "/" component = { CreateEmployee } />
            <Route path = "/current-employees" component = { CurrentEmployees } />
          </Switch>
        </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
