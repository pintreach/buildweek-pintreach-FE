import "./App.css";
import React, { Component } from "react";
import PintreachForm from "./components/PintreachFrom";
import { Route, NavLink } from "react-router-dom";
import logo from './components/logo.png'
import Login from "./components/Login";
import Register from "./components/Register";


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
        
        <ul className="navbar">
          <li>
            <NavLink exact to="/login" activeClassName="activeNavButton">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/register" activeClassName="activeNavButton">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/PintreachForm" activeClassName="activeNavButton">
              PintreachForm
            </NavLink>
          </div>
          <div>
          <a href="http://pintereachui.netlify.com/">Home</a>
          </div>

        </ul>
        <h1>Know whats going on in your field</h1>
        <Route path="/login" component={Login} />
        <Route path="/register" render={props=><Register {...props}/>} />
        <Route
          path="/PintreachForm"
          render={() => <PintreachForm pintreach={this.state.pintreach} />}
        />
      </div>
    );
  }
}

export default App;
