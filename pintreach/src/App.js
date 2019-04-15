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

      .then(data => {
        this.setState({ pintreach: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  addPintreach = item => {
    axios
      .post("" / item)
      .then(res => {
        this.setState({
          addPintreachSuccess: res.data.pintreach
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      pintreach: this.state.pintreach.filter(pin => !pin.completed)
    });
  };

  togglePintreach = pinId => {
    this.setState({
      pintreach: this.state.pintreach.map(pin => {
        if (pinId === pin.id) {
          return {
            ...pin,
            completed: !pin.completed
          };
        }
        return pin;
      })
    });
  };

  handleChanges = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>pintreach</h1>

        {/* <Route exact path= "/" components={Login}/>
        <PintreachList pintreach={this.state.pintreach} />
        <PintreachForm
          addPintreach={this.addPintreach}
          addPintreachSussess={this.state.addPintreachSuccess}
          
        /> */}
      </div>
    );
  }
}

export default App;
