import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
    const {googleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const path = location?.state?.pathname || '/'

    const handleLogin = () =>{
        googleLogin()
        .then(()=>{
            navigate(path)
            Swal.fire({
                icon: 'success',
                title: 'User Login Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <button onClick={handleLogin} className="btn btn-outline btn-primary">
            <FaGoogle></FaGoogle>
             Login With Google
            </button>
        </div>
    );
};

export default Social;