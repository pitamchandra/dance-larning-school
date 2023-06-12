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
        <h3 className="text-3xl text-black text-center mb-10">Most Popular Instructor</h3>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    instructors.map(instructor => <div key={instructor._id}>
                    <div  className="w-full bg-gray-300 text-center border border-primary">
                    <figure className="">
                        <img  src={instructor?.photo} alt="photo" className=" w-full" />
                    </figure>
                    <h2 className="text-3xl text-white py-5 bg-primary">{instructor?.name}</h2>
                    
                    </div>
                </div>)
                }
            
        </div>
        </>
    );
};

export default Instructor;