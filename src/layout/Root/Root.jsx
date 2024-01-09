import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="mx-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div><Toaster /></div>
        </div>
    );
};

export default Root;