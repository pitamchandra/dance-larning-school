import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../Hook/useAdmin";
import useInstructor from "../../Hook/useInstructor";
import useCart from "../../Hook/useCart";


const AllSingleClass = ({cls}) => {
    console.log( 'from ',cls)
    const  { category, instructor, photo, price, seats, status, } = cls
    const [isAdmin] = useAdmin()
    const [isInstractor] = useInstructor()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const [, refetch] = useCart()

    const handleAddToCart = () => {
            if(user && user.email){
                const cartItem = { category, email: user?.email, instructor, photo, price, seats, status  }
                fetch('https://dance-learning-school-server-ochre.vercel.app/carts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cartItem)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        refetch(); 
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
                    title: 'Please enroll for selected',
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
                    <div className="card dark light w-full bg-base-100 shadow-xl border-primary border hover:bg-slate-300 duration-500">
                            <figure><img src={photo} className="h-80 w-full" alt="Shoes" /></figure>
                            <div className="card-body">
                                    <h2 className="card-title">{category}</h2>
                                    <h2 className="card-title">Instructor:   {instructor}</h2>
                                    <p>Available seats: <span>{seats}</span><br /> Price: <span>{price} </span>TK</p>
                                    <div className="card-actions justify-end">
                                            <button disabled={isAdmin || isInstractor} onClick={() => handleAddToCart(cls)} className="btn btn-primary">Select Now</button>
                                    </div>
                            </div>
                    </div>
            </div>
    );
}

export default AllSingleClass;