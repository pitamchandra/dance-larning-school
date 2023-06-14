import { useEffect, useState } from "react";
import AllSingleClass from "../../Classes/AllSingleClass";


const Class = () => {
    const [Class, setClass] = useState([])
        const url = `https://dance-learning-school-server-ochre.vercel.app/addclass/`
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
        <>
            <div className='text-center mb-10'>
                <h3 className="text-3xl text-black ">Most Popular Classes</h3>
                <div className="divider w-14 m-auto h-1 mt-2 bg-primary"></div> 
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {
                        Class.slice(0, 6).map(cls => <AllSingleClass key={cls._id}
                        cls ={cls}></AllSingleClass>)
                      }  
            </div>
        </>
    );
};

export default Class;