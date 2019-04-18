import React from 'react';
import logo from '../components/logo.png';
import { NavLink } from "react-router-dom";


const Navbar = () => {
	let id = null;
	if (localStorage.getItem('id')) {
		id = localStorage.getItem('id');
	}
	function logout(){
		localStorage.removeItem('id');
		localStorage.removeItem('authorization');
	}	
	return (
		<ul className="navbar">
			<ul>
				<img src={logo} alt="Logo" />
			</ul>
			{!id ? (
			<>
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
			</>):(
        <div onClick={()=>logout()} href='#' className="activeNavButton">
					Logout
				</div>
			)}			
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
