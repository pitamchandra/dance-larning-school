import { useEffect, useState } from "react";


const Instructors = () => {
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
            <div className="grid md:grid-cols-3 gap-10 my-12">
                {
                    instructors.map(instructor => <div key={instructor._id}>
                    <div  className="w-full bg-gray-300 text-center border border-primary rounded-xl">
                    <figure className="">
                        <img  src={instructor?.photo} alt="photo" className="h-96 w-full rounded-t-xl" />
                    </figure>
                    <h2 className="text-3xl text-white pt-5 bg-primary capitalize">{instructor?.name}</h2>
                    <p className="text-md text-white pb-5 bg-primary rounded-b-xl"><strong>Email:</strong> {instructor?.email}</p>
                    </div>
                </div>)
                }
            
        </div>
        </>
    );
};

export default Instructors;