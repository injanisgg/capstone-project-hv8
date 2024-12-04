import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import About from "../pages/about";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Shop from "../pages/shop";
import Cart from "../pages/cart";
import Profile from "../pages/profile";
import LoginPage from "../pages/login.jsx";
import SignIn from "../pages/signin";
import ProductDetails from "../pages/productDetails.jsx";


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
                path: "/signin",
                element: <SignIn/>
            },
            {
                path: "/product-details",
                element: <ProductDetails/>
            }

        ]
    }
])

export default router;