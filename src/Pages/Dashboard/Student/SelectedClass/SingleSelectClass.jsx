
import { FaTrashAlt } from 'react-icons/fa';

const SingleSelectClass = ({selected, handleDelete}) => {
    const  { category,  instructor, photo, price, seats, _id } = selected
        
        
   
    
    return (
            <div>
                  <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={photo} className="h-80" /></figure>
                            <div className="card-body">
                                    <h2 className="card-title">{category}</h2>
                                    <h2 className="card-title">Instructor:   {instructor}</h2>
                                    <p>Available seats: <span>{seats}</span><br /> Price: <span>{price} </span>TK <br /></p>
                                    <div className="flex justify-between">
                                    <button className="btn btn-primary mr-10 text-white">Payment</button>
                                            <button className="btn bg-red-700 text-white" onClick={()=> handleDelete(_id)}><FaTrashAlt></FaTrashAlt></button>
                                            
                                    </div>
                            </div>
                    </div>  
            </div>
    );
};

export default SingleSelectClass;