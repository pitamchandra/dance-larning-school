import { NavLink } from "react-router-dom";

const Navbar = () => {

    const li = <>
    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Home</NavLink>;</li>
    <li><NavLink to="/instructors" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Instructors</NavLink>;</li>
    <li><NavLink to="/classes" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Classes</NavLink>;</li>
    <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Dashboard</NavLink>;</li>
    <li><NavLink to="/login" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Login</NavLink>;</li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                   {li}
                </ul>
                </div>
                <a className="normal-case text-xl">Dance Learning <span className="text-orange-500">School</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {li}
                </ul>
            </div>
            <div className="navbar-end">
            <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;