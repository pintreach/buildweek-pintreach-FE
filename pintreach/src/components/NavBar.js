import React from 'react';
import logos from '../components/logos.png';
import { NavLink } from "react-router-dom";


const Navbar = () => {
	return (
			<div className="navbar">
		<ul> 
			<div>
				<img src={logos} alt="Logo" />
			</div>
			<div>
				<NavLink exact to="/login" activeClassName="activeNavButton">
					Login
				</NavLink>
			</div>
			<div>
				<NavLink exact to="/register" activeClassName="activeNavButton">
					Register
				</NavLink>
			</div>
			<div>
				<NavLink to="/" activeClassName="activeNavButton">
					Articles
				</NavLink>
			</div>
			<div>
				<a href="http://pintereachui.netlify.com/">Home</a>
			</div>
			</ul>
		</div>
	);
};

export default Navbar;
