import MainLayout from './layouts/MainLayout';
import ErrorPage from './pages/ErrorPage';
import Index from './pages/Index.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import DashboardIndex from './pages/dashboard/DashboardIndex.tsx';
import Course from './pages/dashboard/Course.tsx';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import AdminIndex from "./pages/admin/AdminIndex.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Index/>},
            {
                path: "login",
                element: <Login />,
            },
            {index: true, element: <DashboardIndex/>},
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {index: true, element: <DashboardIndex />},
            {
                path: "course/:id",
                element: <Course />,
            },
        ],
    },
    {
        path: "/admin",
        element: <DashboardLayout/>,
        children: [
            {index: true, element: <AdminIndex />},
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);