import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AllSingleClass from "./AllSingleClass";


const Classes = () => {
    const { user } = useContext(AuthContext)
        console.log(user?.email)
        const [Class, setClass] = useState([])
        const url = `http://localhost:5000/addclass/`
        useEffect(() =>{
            fetch (url)
            .then(res => res.json())
            .then(data =>  {
               
                console.log(data)
                const approve = data.filter(cls => cls.status === "pending")

        setClass(approve)
        }
             
            )
        },[url])



        return (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-32">
                      {
                        Class.map(cls => <AllSingleClass key={cls._id}
                        cls ={cls}></AllSingleClass>)
                      }  
                </div>
        );
};

export default Classes;