import PopupSignin from "../components/PopupSignin";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/confirm';

  //cek apakah sudah signin atau login
  const isLoggedin = localStorage.getItem('authToken');
  const showPopupSignin = !isLoggedin && location.pathname !== '/login' &&  location.pathname !== '/signup';
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="relative z-10">
      <div className="flex flex-col">
        {showNavbar && <Navbar onToggleFilter={() => setIsFilterOpen(prev => !prev)}/>} {/* Render Navbar hanya jika bukan di halaman login dan signin */}
        {showPopupSignin && <PopupSignin />} {/* pop up yang muncul hanya ketika belum sign in atau login */}
      </div>
      <Outlet/>
    </div>
  );
}

export default App;
