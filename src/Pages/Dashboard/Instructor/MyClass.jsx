import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import SingleClass from "./SingleClass";


const MyClass = () => {
   const { user } = useContext(AuthContext)

const [myClass, setMyClass] = useState([])
const url = `https://dance-learning-school-server-ochre.vercel.app/addclass?email=${user.email}`
useEffect(() =>{
    fetch (url)
    .then(res => res.json())
    .then(data =>  setMyClass(data))
},[url])

console.log("form my class ", myClass);

return (
    <>
    <div className='text-center'>
                        <h3 className="text-3xl text-black capitalize font-semibold">my classes</h3>
                        <div className="divider w-14 m-auto h-1 mt-2 bg-primary"></div> 
                </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 w-full">
        {
            myClass.map(cls=> <SingleClass
                key={cls._id}
                cls = {cls}>
                
            </SingleClass>)
        }
    </div>
    </>
);
};

export default MyClass;    