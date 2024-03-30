import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import NewsDetails from "../pages/NewsDetails/NewsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/category/:id",
                element: <Home />,
            },
            {
                path: "/news/:id",
                element: <NewsDetails />,
                loader: () => fetch("/data/news.json"),
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/career",
                element: <Career />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
