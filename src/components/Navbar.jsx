import React from 'react'
import Search from "../components/Search";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container mx-auto px-4">
      <div className='fixed top-0 left-0 right-0 z-20'>
        <nav className="py-8 w-full bg-white flex flex-col md:flex-row md:px-8 gap-16 items-center text-main-army justify-center">
          <h1 className="text-4xl md:text-3xl font-bold sm:pr-[7rem] md:pr-4 md:pl-2">MON.CHÉRIE</h1>
          <NavLink to="/" className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Contact</NavLink>
          <Search/>
          <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink>
          <NavLink to="/profile"><i className="fa-solid fa-user"></i></NavLink>
        </nav>
        <div className="border-b-2 border-main-army w-full mt-0"></div>
      </div>
    </div>
  )
}

export default Navbar