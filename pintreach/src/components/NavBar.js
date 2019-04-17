import React from 'react';
import logo from '../components/logo.png';
import { NavLink } from "react-router-dom";


const Navbar = () => {
	return (
		<ul className="navbar">
			<ul>
				<img src={logo} alt="Logo" />
			</ul>
			<ul>
				<NavLink exact to="/login" activeClassName="activeNavButton">
					Login
				</NavLink>
			</ul>
			<ul>
				<NavLink exact to="/register" activeClassName="activeNavButton">
					Register
				</NavLink>
			</ul>
			<ul>
				<NavLink to="/" activeClassName="activeNavButton">
					Articles
				</NavLink>
			</ul>
			<ul>
				<a href="http://pintereachui.netlify.com/">Home</a>
			</ul>
		</ul>
	);
};

export default Navbar;
