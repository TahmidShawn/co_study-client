import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaUser } from 'react-icons/fa';

const Navbar = () => {

    const { user, logOut } = useAuth()
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success('LogOut Successfully Done!');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#00A8C6] font-semibold" : ""
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/courses"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#00A8C6] font-semibold" : ""
            }
        >
            Courses
        </NavLink>

        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#00A8C6] font-semibold" : ""
            }
        >
            About Us
        </NavLink>

        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#00A8C6] font-semibold" : ""
            }
        >
            Contact
        </NavLink>

        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#00A8C6] font-semibold" : ""
            }
        >
            Dashboard
        </NavLink>


    </>
    return (
        <nav className="navbar px-0 mx-0">
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
            </div>

            <div className="navbar-end">

                <div className="hidden lg:flex mr-10">
                    <ul className=" menu-horizontal px-1 flex gap-6">
                        {navLinks}
                    </ul>
                </div>
                {/* <Link to='/register'><button className="mr-4 hover:text-[#FF9500]">Sign Up</button></Link>
                <Link to='/login'><button className="bg-[#FF9500] hover:bg-opacity-60 px-6 py-2 text-white">Login</button></Link> */}
                <div className="dropdown dropdown-end gap-5">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar bg-gray-200">
                        <div className="rounded-full">
                            {
                                user?.photoURL ? <img src={user.photoURL} alt="" /> :
                                    <p className="text-4xl text-center"><FaUser /></p>
                                // <img src={user.photo} alt="" />
                            }

                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-base-100 w-52">
                        <li>
                            <p className="justify-between hover:rounded-none">
                                {
                                    user?.email ? <p>Name : {user.displayName || 'user'}</p> :
                                        <p>New</p>
                                }

                            </p>
                        </li>
                        <li>
                            {
                                user ?
                                    <button className="hover:rounded-none" onClick={handleLogOut}>LogOut</button>
                                    :
                                    <Link className="hover:rounded-none" to='/login'> <button>LogIn</button></Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;