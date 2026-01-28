import React from "react";
import logo from "../../assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "./button";
const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)
  return (
    <>
      <nav className=" px-6 py-4 flex justify-between items-center  sticky top-0 w-full z-49 bg-surface/50 border-b border-default backdrop-blur-2xl">
        <b className="text-primary ml-2 text-xl sm:text-2xl font-bold">resuMATER</b>
        <div className="flex items-center gap-2 sm:gap-4 font-medium text-[12px] sm:text-sm">
          {!isAuthenticated && <NavLink className="text-muted hidden sm:block" to="/login">Sign-In</NavLink>}
          {!isAuthenticated && <NavLink className="text-muted" to="/register"><Button variant="hero">Get-Started</Button></NavLink>}
          {/* <NavLink className="hover-text-primary text-accent" to="/mainPage">
            {loggedIn ? "Analyze" : "Demo"}
          </NavLink> */}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
