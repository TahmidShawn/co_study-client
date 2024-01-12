import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/Home/Home";
import Dashboard from "../layout/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Courses from "../pages/Courses/Courses";
import CoursesDetails from "../pages/Courses/CoursesDetails";
import About from "../pages/About/About";
import CourseUpload from "../pages/DashboardPages/CourseUpload/CourseUpload";
import AllUsers from "../pages/AllUsers/AllUsers";

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
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            }

        ]
    },

    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {

                path: "courseUpload",
                element: <CourseUpload></CourseUpload>

            },
            {

                path: "allUsers",
                element: <AllUsers></AllUsers>,
                loader: () => fetch('http://localhost:5000/users')

            }
        ]

    }
]);

export default Routes