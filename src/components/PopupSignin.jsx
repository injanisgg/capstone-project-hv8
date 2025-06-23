import { useNavigate } from "react-router-dom";

function PopupSignin() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/signup");
    }

    return (
        <div className="bg-main-army w-full p-2 text-white text-xs lg:text-base flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center text-center fixed top-0 lg:top-24 z-30 mb-6" onClick={handleRedirect}>
            <span>Sign up and get 20% off to your first order.</span>
            <span className="underline cursor-pointer" onClick={(e) => {
                e.stopPropagation(); // Mencegah `div` menangkap event klik
                navigate("/signup"); // Navigasi ke halaman lain
            }}>
                Sign Up Now
            </span>
        </div>
    );
}

export default PopupSignin;
