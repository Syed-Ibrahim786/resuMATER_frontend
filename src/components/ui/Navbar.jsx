import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink, Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
<nav className=" px-6 py-4 flex justify-between items-center mb-10 sticky top-0 w-full bg-surface border-b border-default backdrop-blur">
        {/* <img src={logo} height="40px" width="auto" alt="resuMATER" /> */}
        <b className='text-primary text-2xl'>resuMATER</b>
        <NavLink className="hover-text-primary text-accent" to="/mainPage">Analyze</NavLink>
    </nav>
    <Outlet/>
    </>
    
  )
}

export default Navbar
