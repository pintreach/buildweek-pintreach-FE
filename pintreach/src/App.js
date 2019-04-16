import React, { Component } from "react";
import PintreachForm from "./components/PintreachFrom";
import PintreachList from "./components/PintreachList";
import Login from "./components/Login";
import { Route, NavLink} from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pintreach: [],
      
    };
  }



  render() {
    return (
      <div className="App">
        <h1>pintreach</h1>
        <ul className="navbar">
        <li>
        <NavLink exact to="/" activeClassName="activeNavButton">Login</NavLink>
        </li>
        <li>
          <NavLink to="/PintreachList" activeClassName="activeNavButton">PintreachList</NavLink>
        </li>
        <li>
        <NavLink to="/PintreachForm" activeClassName="activeNavButton">PintreachForm</NavLink>
        </li>
        </ul>
        <Route exact path="/" components={Login} />
        <Route
          path="/pintreachList"
          render={props => <PintreachList pintreach={this.state.pintreach} />}
        />
        <Route
          path="/PintreachForm"
          render={props => (
            <PintreachForm
            pintreach={this.state.pintreach} /> )}
        />
      </div>
    );
  }
}

export default App;
