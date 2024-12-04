import React from 'react'
import Search from "../components/Search";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="py-10 w-full bg-white flex gap-16 items-center text-main-army justify-center">
        <h1 className="text-4xl font-bold pr-[7rem]">MON.CHÉRIE</h1>
        <Link to="/" className='hover:underline'>Home</Link>
        <Link to="/shop" className='hover:underline'>Shop</Link>
        <Link to="/about" className='hover:underline'>About</Link>
        <Link to="/contact" className='hover:underline'>Contact</Link>
        <Search/>
        <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
        <Link to="/profile"><i className="fa-solid fa-user"></i></Link>
      </nav>
      <div className="border-b-2 border-main-army w-full mt-6"></div>
    </div>
  )
}

export default Navbar
