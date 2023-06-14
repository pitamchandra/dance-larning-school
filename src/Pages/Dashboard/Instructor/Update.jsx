import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const loadData = useLoaderData()
        const { category,  photo, price, seats, _id,  }= loadData
      console.log(loadData)

      const handleUpdate = event =>{
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const seats = form.seats.value;
        const category = form.category.value;
        const price = form.price.value;
        
        const updateClass = {
            price : parseInt(price),
            category,
            photo,
            seats
            
        }
        
        fetch(`http://localhost:5000/addclass/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateClass)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

        return (
                <>
                    <div className="w-2/3">
                    <h1 className='p-4 text-4xl text-center'>Update your class now!</h1>
                        <form onSubmit={handleUpdate} className="w-full">
                            <div className="flex gap-5 mt-7">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                    <span className="label-text">Class Image</span>
                                    </label>
                                    <input name="photo" type="text" placeholder="Class Image" defaultValue={photo} className="input input-bordered border-primary" required/>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                    <span className="label-text"> Class name</span>
                                    </label>
                                    <input name="category" type="text" placeholder="type class name" defaultValue={category} className="input input-bordered border-primary" required/>
                                    
                                </div>
                            </div>
                            <div className="flex gap-5 mt-7">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text"> Available seats</span>
                                </label>
                                <input name="seats" type="number" placeholder=" Available seats" defaultValue={seats} className="input input-bordered border-primary" required/>
                                </div>
                                <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name="price" type="number" placeholder="Price" defaultValue={price} className="input input-bordered border-primary" required/>
                                </div>
                                <div className="form-control w-1/2 hidden">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <input name="status" type="text" defaultValue={"pending"} placeholder="status" className="" readOnly required/>
                                </div>
                            </div> 
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Class</button>
                            </div>
                        </form>
                    </div>
                       
        </>
)};

export default Update;