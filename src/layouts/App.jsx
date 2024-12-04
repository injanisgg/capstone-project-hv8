import PopupSignin from "../components/PopupSignin";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/signin';

  return (
    <>
    {showNavbar && <Navbar />} {/* Render Navbar hanya jika bukan di halaman login */}
      {/* <PopupSignin /> */}
      <Outlet/>
    </>
  );
}

export default App;
