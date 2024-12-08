import PopupSignin from "../components/PopupSignin";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/signin';

  //cek apakah sudah signin atau login
  const isLoggedin = localStorage.getItem('authToken');
  const showPopupSignin = !isLoggedin; 

  return (
    <>
      {showPopupSignin && <PopupSignin />} {/* pop up yang muncul hanya ketika belum sign in atau login */}
      {showNavbar && <Navbar />} {/* Render Navbar hanya jika bukan di halaman login dan signin */}
      <Outlet/>
    </>
  );
}

export default App;
