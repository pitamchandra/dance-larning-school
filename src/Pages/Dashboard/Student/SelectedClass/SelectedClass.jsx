import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import SingleSelectClass from "./SingleSelectClass";
import useCart from "../../../../Hook/useCart";


const SelectedClass = () => {
    const [, refetch] =useCart()
    const { user } = useContext(AuthContext)
    const [selectClass, setSelectClass] = useState([])
    const url = `http://localhost:5000/carts?email=${user?.email}`
    useEffect(() =>{
        fetch (url)
        .then(res => res.json())
        .then(data =>  setSelectClass(data)
        )
    },[url])

    const handleDelete = id => {
            const proceed = confirm('Are You sure you want to delete');
            if (proceed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch(); 
                            alert('deleted successful');
                            const remaining = selectClass.filter(cls => cls._id !== id);
                            setSelectClass(remaining);
                        }
                    })
            }
        }
    console.log(selectClass)
    return (
          <div>
            {/* <Title heading={"Your Selected Class"}></Title> */}
              <div className="grid md:grid-cols-2 gap-4">
                  {
                    selectClass.map(selected => <SingleSelectClass
                    key={selected._id}
                    handleDelete = {handleDelete}
                    selected={selected}></SingleSelectClass>)
                  }
            </div>
          </div>
    );
};

export default SelectedClass;