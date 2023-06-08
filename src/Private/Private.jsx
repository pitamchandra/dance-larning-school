import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div>loading............</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={location}></Navigate>
};

export default Private;