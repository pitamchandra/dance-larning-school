import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const MyClass = () => {
   const { user } = useContext(AuthContext)

const [myClass, setMyClass] = useState([])
const url = `http://localhost:5000/addclass?email=${user.email}`
useEffect(() =>{
    fetch (url)
    .then(res => res.json())
    .then(data =>  setMyClass(data))
},[url])


return (
        <div className="w-full">
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>class Name</th>
                        <th>Total Enrolled Students</th>
                        <th>Feedback</th>
                        <th>Role</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClass.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            {/* <td>{ user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                }</td> */}
                            {/* <td>{ user.role === 'instractor' ? 'instractor' :
                                <button onClick={() => handleMakeInstractor(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                }</td> */}
                            {/* <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td> */}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </div>
);
};

export default MyClass;    