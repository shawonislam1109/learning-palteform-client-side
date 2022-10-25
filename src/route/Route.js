import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
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
                element: <Home></Home>
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