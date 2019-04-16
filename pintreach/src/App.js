import React, { Component } from "react";
import PintreachForm from "./components/PintreachFrom";
import logo from './components/logo.png'
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
      
          <div>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Login
            </NavLink>
          </div>

          <div>
            <NavLink to="/PintreachForm" activeClassName="activeNavButton">
              PintreachForm
            </NavLink>
          </div>
          <div>
          <a href="http://pintereachui.netlify.com/">Home</a>
          </div>

        </ul>
        <h1>Know whats going on in your field</h1>
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
