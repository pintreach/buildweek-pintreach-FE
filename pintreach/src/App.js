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
      input: ""
    };
  }
  componentDidMount() {
    axios
      .get("")

      .then(res => {
        this.setState({ pintreach: res.data.pintreach });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  handleChanges = e => {
    this.setState({ input: e.target.value });
  };

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
              addPintreach={this.addPintreach}
              addPintreachSussess={this.state.addPintreachSuccess}
            />
          )}
        />{" "}
        */
      </div>
    );
  }
}

export default App;
