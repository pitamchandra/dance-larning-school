import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AllSingleClass = ({cls}) => {
    console.log(cls)
    const  { category, email, instructor, photo, price, seats, status, _id } = cls
const {user} = useContext(AuthContext)
const navigate = useNavigate()
// const [, refetch] = useCar

    const handleAddToCart = items => {
            console.log(items)
            if(user && user.email){
                const cartItem = { category, email, instructor, photo, price, seats, status, _id }
                fetch('http://localhost:5000/carts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cartItem)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        // refetch(); 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Enroll added..',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
            else{
                Swal.fire({
                    title: 'Please login to Enoroll select',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Login now!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate('/login', {state: {from: location}})
                    }
                  })
            }
        }
        
    return (
            <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={photo} className="h-80" alt="Shoes" /></figure>
                            <div className="card-body">
                                    <h2 className="card-title">{category}</h2>
                                    <h2 className="card-title">Instructor:   {instructor}</h2>
                                    <p>Available seats: <span>{seats}</span><br /> Price: <span>{price} </span>TK</p>
                                    <div className="card-actions justify-end">
                                            <button onClick={() => handleAddToCart(cls)} className="btn btn-primary">Select Now</button>
                                    </div>
                            </div>
                    </div>
            </div>
    );
};

export default AllSingleClass;