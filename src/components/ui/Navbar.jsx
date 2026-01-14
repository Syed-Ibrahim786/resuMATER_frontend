import React from "react";
import logo from "../../assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <>
      <nav className=" px-6 py-4 flex justify-between items-center  sticky top-0 w-full z-49 bg-surface/50 border-b border-default backdrop-blur-2xl">
        <b className="text-primary text-xl sm:text-2xl font-bold">resuMATER</b>
        <div className="flex gap-2 sm:gap-4 font-medium text-[12px] sm:text-lg">
          {!loggedIn && <NavLink className="text-muted" to="/login">Sign-In</NavLink>}
          {!loggedIn && <NavLink className="text-muted" to="/register">Get-Started</NavLink>}
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
