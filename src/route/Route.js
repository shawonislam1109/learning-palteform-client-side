import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Sidedata from "../Component/LeftSideNav/sideData/Sidedata";
import SingleCategory from "../Component/SingleCategory/SingleCategory";
import Main from "../Layout/Main";
import Login from "../login-and-logout/login/Login";
import Register from "../login-and-logout/register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch(`http://localhost:5000/categoryData`)
                }
            },

            {
                path: '/home',
                element: <Home></Home>,
                loader: () => {
                    return fetch(`http://localhost:5000/categoryData`)
                }
            },

            {
                path: '/home/:id',
                element: <PrivateRoute> <SingleCategory /> </PrivateRoute>,
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