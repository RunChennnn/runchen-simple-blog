import {createBrowserRouter} from "react-router-dom";


import Login from "../pages/login/login";
import Layout from "../pages/layout/layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>

    },
    {
        path: '/login',
        element: <Login />
    }
])
export default router