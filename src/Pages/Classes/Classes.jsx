import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AllSingleClass from "./AllSingleClass";
import { Helmet } from "react-helmet";


const Classes = () => {
        const { user } = useContext(AuthContext)
        console.log(user?.email)
        const [Class, setClass] = useState([])
        const url = `https://dance-learning-school-server-ochre.vercel.app/addclass/`
        useEffect(() =>{
            fetch (url)
            .then(res => res.json())
            .then(data =>  {
               
                console.log(data)
                const approve = data.filter(cls => cls.status === "approved")

        setClass(approve)
        }
             
            )
        },[url])


        return (
                <>
                <Helmet>
                        <title>Home: Classes</title>
                        <meta name="description" content="Nested component" />
                </Helmet>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                      {
                        Class.map(cls => <AllSingleClass key={cls._id}
                        cls ={cls}></AllSingleClass>)
                      }  
                </div>
                </>
        );
};

export default Classes;