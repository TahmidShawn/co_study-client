import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/Home/Home";
import Dashboard from "../layout/Dashboard/Dashboard";
import CourseUpload from "../pages/CourseUpload/CourseUpload";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },


        ]
    },

    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {

                path: "dashboard/courseUpload",
                element: <CourseUpload></CourseUpload>

            }
        ]

    }
]);

export default Routes