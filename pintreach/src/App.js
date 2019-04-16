import React, { Component } from "react";
import PintreachForm from "./components/PintreachFrom";
import PintreachList from "./components/PintreachList";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import axios from "axios";
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
        /* <Route exact path="/" components={Login} />
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
