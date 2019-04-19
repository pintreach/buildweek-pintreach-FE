import React from 'react';
import logos from '../components/logos.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	let id = null;
	if (localStorage.getItem('id')) {
		id = localStorage.getItem('id');
	}
	const logout = () => {
		localStorage.removeItem('id');
		localStorage.removeItem('authorization');
		window.location.reload();
	};
	return (
		<div className="nav">
			<img className="img" src={logos} alt="Logo" />
			<div className="nav-links">
				{!id ? (
					<>
						<NavLink exact to="/login" activeClassName="activeNavButton">
							Login
						</NavLink>
						<NavLink exact to="/register" activeClassName="activeNavButton">
							Register
						</NavLink>
					</>
				) : (
					<div onClick={() => logout()} href="#" className="activeNavButton">
						Logout
					</div>
				)}
				<NavLink to="/" activeClassName="activeNavButton">
					Articles
				</NavLink>
				<a href="http://pintereachui.netlify.com/">Home</a>
			</div>
		</div>
	);
};

export default Navbar;
