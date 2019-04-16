import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	componentDidMount() {}
	handleLogin = (e) => {
    e.preventDefault();
		axios
			.post('https://pintereach-buildweek.herokuapp.com/auth/login', {
				username: this.state.username,
				password: this.state.password
			})
			.then((res) =>{ 
        localStorage.setItem('authorization', res.data.token)
        console.log(res.status)
      })
			.catch((err) => {
				console.log(err);
			});
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<form onSubmit={this.handleLogin}>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
					placeholder="Username..."
				/>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
					placeholder="Password..."
				/>
				<button onSubmit={this.handleLogin}>Login</button>
			</form>
		);
	}
}

export default Login;
