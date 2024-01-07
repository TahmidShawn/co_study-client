import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500" : ""
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/courses"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500" : ""
            }
        >
            Courses
        </NavLink>

        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500" : ""
            }
        >
            About Us
        </NavLink>

        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500" : ""
            }
        >
            Contact
        </NavLink>

        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500" : ""
            }
        >
            Dashboard
        </NavLink>


    </>
    return (
        <nav className="navbar">
            <div className="navbar-start">
                <button className="bg-gray-200 font-bold text-xl px-8 py-2 mr-8 hidden lg:inline">CoStudy</button>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul className=" menu-horizontal px-1 flex gap-6">
                        {navLinks}
                    </ul>
                </div>
            </div>

            <div className="navbar-end">
                <Link to='/register'><button className="mr-4 hover:text-[#FF9500]">Sign Up</button></Link>
                <Link to='/login'><button className="bg-[#FF9500] hover:bg-opacity-60 px-6 py-2 text-white">Login</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;