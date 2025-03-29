import { useNavigate } from "react-router-dom";

function PopupSignin() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/signup");
    }

    return (
        <div className="bg-main-army py-2 text-white flex gap-5 justify-center fixed top-24 z-20 mb-6" onClick={handleRedirect}>
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
