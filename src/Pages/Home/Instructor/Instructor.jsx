import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Instructor = () => {
    // const {user} = useContext(AuthContext)
    const [instructors, setInstructors] = useState([])

    useEffect(()=>{
        fetch(`https://dance-learning-school-server-ochre.vercel.app/users/instractor`)
        .then(res=> res.json())
        .then(data =>{
            setInstructors(data)
        })
    }, [])
console.log(instructors);
    return (
        <>
          <div className='text-center mb-10'>
            <h3 className="text-3xl text-black ">Most Popular Instructor</h3>
            <div className="divider w-14 m-auto h-1 mt-2 bg-primary"></div> 
        </div>
        
            <div className="grid md:grid-cols-3 gap-10 ">
                {
                    instructors.slice(0, 6).map(instructor => <div key={instructor._id}>
                    <div  className="w-full bg-gray-300 text-center border border-primary rounded-xl">
                    <figure className="">
                        <img src={instructor?.photo} alt="photo" className="h-96 w-full rounded-t-xl" />
                    </figure>
                    <h2 className="text-3xl text-white py-5 bg-primary rounded-b-xl capitalize">{instructor?.name}</h2>
                    </div>
                </div>)
                }
        </div>
        </>
    );
};

export default Instructor;