import "./App.css";
import React, { Component } from "react";
import Articles from "./components/Articles";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar"


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn : false,
      pintreach: []
    };
  }
  componentDidMount(){
    if (localStorage.getItem('authorization')){
      this.setState({loggedIn: true})
    }
  }
  render() {
    return (
      <div className="App">        
        <NavBar />
        <h1>Know whats going on in your field</h1>
        <Route path="/login" component={Login} />
        <Route path="/register" render={props=><Register {...props}/>} />
        <Route
          path="/"
          render={() => <Articles pintreach={this.state.pintreach} />}
        />
      </div>
    );
  }
}

export default App;
