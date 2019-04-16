import React, { Component } from "react";
import PintreachForm from "./components/PintreachFrom";

import Login from "./components/Login";
import { Route, NavLink } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pintreach: []
    };
  }

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Login
            </NavLink>
          </li>

          <li>
            <NavLink to="/PintreachForm" activeClassName="activeNavButton">
              PintreachForm
            </NavLink>
          </li>
        </ul>
        <h1>pintreach</h1>
        <Route exact path="/" component={Login} />

        <Route
          path="/PintreachForm"
          render={props => <PintreachForm pintreach={this.state.pintreach} />}
        />
      </div>
    );
  }
}

export default App;
