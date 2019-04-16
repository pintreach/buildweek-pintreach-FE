// import React, { Component } from "react";
// import axios from "axios";


// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       login: {
//         username: "",
//         password: ""
//       }
//     };
//   }
//   componentDidMount() {

//     axios
//       .get("https://pintereach-buildweek.herokuapp.com/users")

//       .then(res => {
//         this.setState({ login: res.data });
//       })
//       .catch(err => {
//         throw new Error(err);
//       });
//   }
//   addUser = e => {
//     e.preventDefault();
//     const item = {
//       username: "test3",
//       password: "test",
//       name: "Test User",
//       email: "testing3@testingemail.com"
//     };
//     axios
//       .post("https://pintereach-buildweek.herokuapp.com/auth/register", item)
//       .then(res => {
//         this.setState({
//           addUserSuccess: res.data
//         });
//       })
//       .catch(err => {
//         throw new Error(err);
//       });
//   };
//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();
//     this.login.map(log => <Login key= {log.id} log={log}/>)

//     this.props.login(this.state.credentials).then(() => {
//       this.props.history.push("/protected");
//     });
//   };

//   render() {
//     return (
      
//         <form onSubmit={this.login}>
//           <input
//             type="text"
//             name=
//             value={this.state.username}
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//           <button onSubmit={this.login} />
//         </form>
      
//     );
//   }
// }

// export default Login;
