import { useLoaderData } from "react-router-dom";


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
              alert("update  success")
            }
        })
    }

        return (
                <div>
                        <h1 className="text-2xl font-bold">Update your class now!</h1>
                      <div className="hero min-h-screen ">
            <form onSubmit={handleUpdate} className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo url</span>
                </label>
                <input type="text" name='photo'  placeholder="Photo url"  defaultValue={photo} className="input input-bordered" />
                <label className="label">
                    <span className="label-text">Available Seats</span>
                </label>
                <input type="number" placeholder="Seats" name='seats'  defaultValue={seats}  className="input input-bordered" />
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="number"  name='price'  defaultValue={price}  className="input input-bordered" />
                </div>
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <select name="category" className="select select-primary w-full max-w-xs" required>
                        <option disabled selected>{category}</option>
                        <option>Folk dance</option>
                        <option>Tap Dance </option>
                        <option>Belly dance</option>
                        <option>Ballet dance</option>
                        <option>Contemporary dance</option>
                        <option>Disco dance</option>
                        <option>Manipuri Dance</option>
                        <option>Bollywood dance</option>
                        </select>
                </div>
                
                <div className="form-control mt-6">
                <button className="btn btn-primary">Update Class</button>
                </div>
            </form>
            </div>
        </div>
)};

export default Update;