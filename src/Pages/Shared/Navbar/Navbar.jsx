import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () =>{
        logout()
        .then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'User Logout Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login')
        })
    }

    const li = <>
    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary text-xl bg-transparent " : "text-xl"}>Home</NavLink></li>
    <li><NavLink to="/instructors" className={({ isActive }) => isActive ? "text-primary text-xl bg-transparent " : "text-xl"}>Instructors</NavLink></li>
    <li><NavLink to="/classes" className={({ isActive }) => isActive ? "text-primary text-xl bg-transparent " : "text-xl"}>Classes</NavLink></li>
    {user && <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-primary text-xl bg-transparent" : "text-xl"}>Dashboard</NavLink></li>}
    
    </>


    return (
        <div className="navbar bg-base-100 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow text-black z-20 bg-white rounded-box w-52">
                   {li}
                </ul>
                </div>
                <Link to='/' className="text-sm md:text-xl">Dance Learning <span className="text-primary">School</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {li}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <div className="btn btn-primary btn-xs md:btn-md" onClick={handleLogout}>Logout</div>
                    <div className="avatar ml-4">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img title={user && user?.displayName} src={user && user?.photoURL} />
                        </div>
                    </div>
                    </> : <>
                    <Link to="/login" className="btn btn-primary">Login</Link>
                    </>
                }
            
            
            </div>
        </div>
    );
};

export default Navbar;