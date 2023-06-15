
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleSelectClass = ({selected, handleDelete}) => {
    const  { category,  instructor, photo, price, seats, _id } = selected
        
//     const handlePayment = (id) => {
//         localStorage.setItem("id", id);
//       };
    return (
            <div>
                  <div className="card border-primary border w-full bg-base-100 shadow-xl">
                            <figure><img src={photo} className="h-60 w-full" /></figure>
                            <div className="p-3">
                                    <h2 className="card-title">{category}</h2>
                                    <h2 className="card-title">Instructor:   {instructor}</h2>
                                    <p>Available seats: <span>{seats}</span><br /> Price: <span>{price} </span>TK <br /></p>
                                    <div className="flex justify-between">
                                    <Link to={`/dashboard/payment/${selected._id}`}><button className=" btn btn-sm btn-primary"> Payment</button></Link>
                                            <button className="btn bg-red-700 btn-sm text-white" onClick={()=> handleDelete(_id)}><FaTrashAlt></FaTrashAlt></button>
                                    </div>
                            </div>
                    </div>  
            </div>
    );
};

export default SingleSelectClass;