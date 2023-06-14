import { useContext, useEffect, useState } from "react";
import SingleManageClass from "./SingleManageClass";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const ManageClass = () => {
    const { user } = useContext(AuthContext)
        console.log(user?.email)
        const [allClass, setClass] = useState([])
        const url = `https://dance-learning-school-server-ochre.vercel.app/addclass/`
        useEffect(() =>{
            fetch (url)
            .then(res => res.json())
            .then(data =>  {
                setClass(data)
                })
        },[url])


        
        console.log(allClass)
        return (
                <>
                <div className='text-center'>
                        <h3 className="text-3xl text-black capitalize font-semibold">manage classes</h3>
                        <div className="divider w-14 m-auto h-1 mt-2 bg-primary"></div> 
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                        {
                                allClass.map(cls =><SingleManageClass
                                key={cls._id} cls = {cls}></SingleManageClass>)
                        }
                </div>
                </>
        );
};

export default ManageClass;