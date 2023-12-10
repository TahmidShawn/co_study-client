import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="bg-white">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <label htmlFor="my-drawer-2" className="btn w-full drawer-button lg:hidden">Open drawer</label>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-xl">
                        {/* Sidebar content here */}
                        <Sidebar></Sidebar>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;