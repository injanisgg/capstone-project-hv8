import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import About from "../pages/about";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Shop from "../pages/shop";
import Cart from "../pages/cart";
import Profile from "../pages/profile";
import LoginPage from "../pages/login.jsx";
import ProductDetails from "../pages/productDetails.jsx";
import SignUp from "../pages/signup.jsx";
import ConfirmedPage from "../pages/confirmedPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/shop/:id",
                element: <ProductDetails/>
            },
            {
                path: "/confirm",
                element: <ConfirmedPage/>
            }

        ]
    }
])

export default router;