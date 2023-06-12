import { useEffect, useState } from "react";


const Instructor = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users/instractor')
        .then(res=> res.json())
        .then(data =>{
            setInstructors(data)
        })
    }, [])

    return (
        <>
        <h3 className="text-3xl text-black text-center mb-10 ">Most Popular Instructor</h3>
            <div className="grid md:grid-cols-3 gap-10 ">
                {
                    instructors.slice(0, 6).map(instructor => <div key={instructor._id}>
                    <div  className="w-full bg-gray-300 text-center border border-primary rounded-xl">
                    <figure className="">
                        <img  src={instructor?.photo} alt="photo" className=" w-full rounded-t-xl" />
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