import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {
    const {data: users= [], refetch}= useQuery(["user"], async()=>{
        const res = await fetch("https://dance-learning-school-server-ochre.vercel.app/users")
        return res.json()
    } )
    const handleMakeAdmin = user =>{
        fetch(`https://dance-learning-school-server-ochre.vercel.app/user/admin/${user._id}`,{
            method: "PATCH"
            
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstractor= user =>{
        fetch(`https://dance-learning-school-server-ochre.vercel.app/user/instractor/${user._id}`,{
            method: "PATCH"
            
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an instructor now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

return (
        <div className="w-full p-10">
        <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr className="bg-primary">
                        <th className="text-xl text-white">#</th>
                        <th className="text-xl text-white">Name</th>
                        <th className="text-xl text-white">Email</th>
                        <th className="text-xl text-white">Role</th>
                        <th className="text-xl text-white"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th className="text-lg">{index + 1}</th>
                            <td className="text-lg">{user.name}</td>
                            <td className="text-lg">{user.email}</td>
                            <td className="text-lg">{ user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-primary  text-white"><FaUserShield></FaUserShield></button> 
                                }</td>
                            <td className="text-lg">{ user.role === 'instractor' ? 'instractor' :
                                <button onClick={() => handleMakeInstractor(user)} className="btn btn-ghost bg-primary text-white"><FaUserShield></FaUserShield></button> 
                                }</td>
                            {/* <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td> */}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
);
};

export default AllUser;