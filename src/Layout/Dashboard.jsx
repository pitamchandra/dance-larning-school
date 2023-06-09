import { FaWallet, FaCalendarAlt, FaHome, FaUsers, FaClipboardList, FaEdit, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa';

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from '../Hook/useAdmin';

const Dashboard = () => {

    const [isAdmin] = useAdmin()
    // const isAdmin = true
    const isInstructor = true

    return (
        <div>
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side bg-orange-600 text-white ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 text-base">
                                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                            
                            {
                                        isAdmin ? <>
                                            <li><NavLink to="/dashboard/adminhome"><FaClipboardList></FaClipboardList> Manage Classes</NavLink></li>
                                            <li><NavLink to="/dashboard/alluser"><FaUsers></FaUsers> Manage Users</NavLink></li>
                                            
                                        </> : <>
                                        {
                                            isInstructor?<>
                                                <li><NavLink to="/dashboard/addClass"><FaEdit></FaEdit>Add a Class</NavLink></li>
                                            <li><NavLink to="/dashboard/myClass"><FaCalendarAlt></FaCalendarAlt> My Classes</NavLink></li>
                                            </>:<>
                                            
                                            <li><NavLink to="/dashboard/userhome"><FaClipboardCheck></FaClipboardCheck> My Selected Classes</NavLink></li>
                                            <li><NavLink to="/"><FaCheckCircle></FaCheckCircle> My Enrolled Classes</NavLink></li>
                                            <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                                        
                                            </>
                                        }
                                        </>
                                    }
                                <div className="divider"></div>
                                
                            </ul>
            
            </div>
            </div>
        </div>
    );
};

export default Dashboard;