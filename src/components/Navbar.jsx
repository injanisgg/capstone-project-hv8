import React from 'react'
import Search from "../components/Search";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="py-10 w-full bg-white flex gap-16 items-center text-main-army justify-center">
        <h1 className="text-4xl font-bold pr-[7rem]">MON.CHÉRIE</h1>
        <NavLink to="/" className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Home</NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Shop</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Contact</NavLink>
        <Search/>
        <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink>
        <NavLink to="/profile"><i className="fa-solid fa-user"></i></NavLink>
      </nav>
      <div className="border-b-2 border-main-army w-full mt-6"></div>
    </div>
  )
}

export default Navbar
