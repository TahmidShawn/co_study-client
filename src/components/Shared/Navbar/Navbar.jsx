import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <NavLink>Home</NavLink>
        <NavLink>Courses</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink to='dashboard'>Dashboard</NavLink>
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
                <Link to='/login'><button className="bg-[#FF9500] px-6 py-2 text-white">Login</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;