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
    <div className="grid md:grid-cols-2 gap-7">
        {
            myClass.map(cls=> <SingleClass
                key={cls._id}
                cls = {cls}>
                
            </SingleClass>)
        }
    </div>
);
};

export default MyClass;    