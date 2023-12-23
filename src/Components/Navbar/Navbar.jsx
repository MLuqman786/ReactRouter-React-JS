import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinkCSS = ({ isActive }) => {
    return isActive
      ? { color: "#ff5722" }
      : {
          color: "white",
          fontSize: isActive ? "40px" : "15px",
        };
  };

  return (
    <>
      <nav className="justify-around flex bg-slate-800 text-white  p-4  ">
        <NavLink style={NavLinkCSS} to="/">
          Home
        </NavLink>
        <NavLink style={NavLinkCSS} to="/products">
          Products
        </NavLink>
        <NavLink style={NavLinkCSS} to="/about">
          About
        </NavLink>
        <NavLink style={NavLinkCSS} to="/contact">
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
