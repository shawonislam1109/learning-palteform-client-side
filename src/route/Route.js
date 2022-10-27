import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import FAQ from "../Component/FAQ/FAQ";
import Home from "../Component/Home/Home";
import Home2 from "../Component/Home2/Home2";
import Sidedata from "../Component/LeftSideNav/sideData/Sidedata";
import Premium from "../Component/Premium/Premium";
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
                path: '/home',
                element: <Home></Home>,
                loader: () => {
                    return fetch(`http://learning-platform-server-seven.vercel.app/categoryData`)
                },
                errorElement: <ErrorPage></ErrorPage>
            },

            // {
            //     path: '/home',
            //     element: <Home></Home>,
            //     loader: () => {
            //         return fetch(`http://learning-platform-server-seven.vercel.app/categoryData`)
            //     }
            // },

            {
                path: '/home/:id',
                element: <SingleCategory />,
                loader: ({ params }) => fetch(`http://learning-platform-server-seven.vercel.app/categoryData/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/premium',
                element: <PrivateRoute><Premium /></PrivateRoute>
            },
            {
                path: '/home2',
                element: <Home2 />
            },
            {
                path: '/',
                element: <Home2 />
            },
            {
                path: '/faq',
                element: <FAQ />
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])