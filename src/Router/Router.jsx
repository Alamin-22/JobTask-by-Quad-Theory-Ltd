import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Deatils/Details";
import Category from "../Pages/Category/Category";
import FavoritesItems from "../Pages/FavoritesItems/FavoritesItems";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Authenticate/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/details",
                element: <Details />
            },
            {
                path: "/category",
                element: <Category />
            },
            {
                path: "/favorites",
                element: <FavoritesItems />,
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
]);

export default router;