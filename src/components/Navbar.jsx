import React, { useState } from 'react'
import Search from "../components/Search";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome as Home,
  faBasketShopping as Shop,
  faCircleInfo as About,
  faAddressBook as Contact
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();
  const location = useLocation()

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'shop', label: 'Shop', icon: Shop, path: '/shop' },
    { id: 'about', label: 'About', icon: About, path: '/about' },
    { id: 'contact', label: 'Contact', icon: Contact, path: '/contact' }
  ]

  return (
    <div>
      {/* navbar for xl and lg */}
      <div className="px-4">
        <div className='hidden lg:fixed lg:top-0 lg:left-0 lg:right-0 z-30'>
          <nav className="py-8 w-full bg-white flex flex-col gap-16 items-center text-main-army justify-center">
            <h1 className="text-4xl font-bold">MON.CHÉRIE</h1>
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

      {/* navbar for md and sm */}
      <div className="lg:hidden w-full z-30 border-b p-2">
        <div className="flex-col fixed z-30 top-14 p-3 left-0 right-0 gap-5 bg-white">
          <h1 className="text-lg lg:text-2xl font-bold justify-self-center text-main-army">MON.CHÉRIE</h1>
          <div className='flex justify-center items-center gap-5'>
            <Search/>
            <NavLink to="/cart"><i className="fa-solid fa-cart-shopping text-main-army"></i></NavLink>
            <NavLink to="/profile"><i className="fa-solid fa-user text-main-army"></i></NavLink>
          </div>
        </div>
      </div>
      <div className="lg:hidden z-20 fixed bottom-0 left-0 right-0 w-full bg-white shadow-md border-t flex justify-around py-2">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={tab.path}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center text-gray-600
              ${location.pathname === tab.path ? 'bg-green-200 p-4 rounded-xl' : 'p-4'}`}
          >
            <FontAwesomeIcon 
              icon={tab.icon}
              className={`text-base transition-all duration-200 ${location.pathname === tab.path ? 'text-main-army' : 'text-gray-600'}`}
            />
            <span className={`text-xs sm:text-sm font-bold ${location.pathname === tab.path ? 'text-main-army' : 'text-gray-600'}`}>{tab.label}</span>
          </Link>
        ))}
      </div>
    </div>
    
  )
}

export default Navbar;