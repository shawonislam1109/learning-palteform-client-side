import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Sidedata from "../Component/LeftSideNav/sideData/Sidedata";
import SingleCategory from "../Component/SingleCategory/SingleCategory";
import Main from "../Layout/Main";
import Login from "../login-and-logout/login/Login";
import Register from "../login-and-logout/register/Register";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/categoryData')
            },
            {
                path: '/',
                element: <Sidedata></Sidedata>,
                loader: () => fetch('http://localhost:5000/categoryData')
            },
            {
                path: '/home/:id',
                element: <SingleCategory></SingleCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/categoryData/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
])