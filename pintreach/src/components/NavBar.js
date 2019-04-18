import React from "react";
import logos from "../components/logos.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let id = null;
  if (localStorage.getItem("id")) {
    id = localStorage.getItem("id");
  }
  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("authorization");
    window.location.reload();
  };
  return (
    <div className="nav">
      <img className="img" src={logos} alt="Logo" />
      {!id ? (
        <>
          <div className="nav">
            <NavLink exact to="/login" activeClassName="activeNavButton">
              Login
            </NavLink>
          </div>
          <div>
            <NavLink exact to="/register" activeClassName="activeNavButton">
              Register
            </NavLink>
          </div>
        </>
      ) : (
        <div onClick={() => logout()} href="#" className="activeNavButton">
          Logout
        </div>
      )}
      <div>
        <NavLink to="/" activeClassName="activeNavButton">
          Articles
        </NavLink>
      </div>
      <div>
        <a href="http://pintereachui.netlify.com/">Home</a>
      </div>
    </div>
  );
};

export default Navbar;
