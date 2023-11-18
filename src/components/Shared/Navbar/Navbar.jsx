import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <div className="flex gap-6">
            <NavLink>Home</NavLink>
            <NavLink>Courses</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Contact</NavLink>
        </div>

    </>
    return (
        <nav className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <button className="bg-gray-200 font-bold text-xl px-8 py-2 mr-8 hidden md:inline">CoStudy</button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>

            <div className="navbar-end">
                <button className="mr-4">Sign Up</button>
                <button className="bg-[#FF9500] px-6 py-2 text-white">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;