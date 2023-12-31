
import { Link } from "react-router-dom";


const SingleClass = ({cls}) => {
    const  { category,  instructor, photo, price, seats, _id, status } = cls

        return (
                <div>
                     <div className="card w-full bg-base-100 border border-primary shadow-xl">
                                <figure><img src={photo} className="h-60 w-full" /></figure>
                                <div className="p-3">
                                        <h2 className="card-title text-2xl capitalize">{category}</h2>
                                        <h2 className="card-title">Instructor:   {instructor}</h2>
                                        <p>Available seats: <span>{seats}</span><br /> Price: <span>{price} </span>TK <br />
                                        <span>Status: {status}</span> <br />
                                        <span>total student: {}</span></p>
                                        <Link to={`${_id}`}><button className="btn btn-sm w-full btn-primary">update</button></Link>
                                        
                                </div>
                        </div>
                </div>
        );
};

export default SingleClass;