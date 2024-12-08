import { useNavigate } from "react-router-dom";

function PopupSignin() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/signin");
    }

    return(
        <div className="bg-main-army py-2 text-white text-center flex gap-5" onClick={handleRedirect}>
            <span>Sign up and get 20% off to your first order.</span>
            <span><a href="/" className="underline">Sign Up Now</a></span>
        </div>
    )
}

export default PopupSignin;