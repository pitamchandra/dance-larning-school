import { useContext, useEffect, useState } from "react";
import SingleManageClass from "./SingleManageClass";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const ManageClass = () => {
    const { user } = useContext(AuthContext)
        console.log(user?.email)
        const [allClass, setClass] = useState([])
        const url = `http://localhost:5000/addclass/`
        useEffect(() =>{
            fetch (url)
            .then(res => res.json())
            .then(data =>  {
                setClass(data)
                })
        },[url])


        
        console.log(allClass)
        return (
                <div className="grid md:grid-cols-2 gap-6">
                        {
                                allClass.map(cls =><SingleManageClass
                                key={cls._id} cls = {cls}></SingleManageClass>)
                        }
                </div>
        );
};

export default ManageClass;