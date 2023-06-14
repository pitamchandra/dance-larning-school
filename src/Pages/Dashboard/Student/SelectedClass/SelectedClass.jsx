import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import SingleSelectClass from "./SingleSelectClass";
import useCart from "../../../../Hook/useCart";
import Swal from "sweetalert2";


const SelectedClass = () => {
    const [, refetch] =useCart()
    const { user } = useContext(AuthContext)
    const [selectClass, setSelectClass] = useState([])
    const url = `https://dance-learning-school-server-ochre.vercel.app/carts?email=${user?.email}`
    useEffect(() =>{
        fetch (url)
        .then(res => res.json())
        .then(data =>  setSelectClass(data)
        )
    },[url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are You sure you want to delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://dance-learning-school-server-ochre.vercel.app/carts/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount > 0) {
                        refetch(); 
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            )
                        const remaining = selectClass.filter(cls => cls._id !== id);
                        setSelectClass(remaining);
                    }
                })
                
            }
          })
            
        }
    // console.log(selectClass)
    return (
          <div>
            {/* <Title heading={"Your Selected Class"}></Title> */}
            <div className='text-center mt-10'>
                <h3 className="text-3xl text-black ">My Selected class</h3>
                <div className="divider w-14 m-auto h-1 mt-2 bg-primary"></div> 
            </div>
              <div className="grid md:grid-cols-2 gap-10 my-10 w-full">
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