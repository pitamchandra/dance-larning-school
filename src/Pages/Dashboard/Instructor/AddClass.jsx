import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
    const { user } = useContext(AuthContext)
  console.log(user)

  const handleProductAdd = event => {
    event.preventDefault();
    const form = event.target;
    const instructor = user?.displayName;
    const photo = form.photo.value;
    const className = form.className.value;
    const category = form.category.value;
    const seats = form.seats.value;
    const price = form.price.value;
    const email = user?.email;
    const status = form.status.value;

    const addClass = {
      instructor,
      email,
      photo,
      category,
      className,
      price: parseInt(price),
      seats: parseInt(seats),
      status

    }
    console.log(addClass)
    // console.log(addToys)

    fetch("https://dance-learning-school-server-ochre.vercel.app/addclass", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addClass)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'your class added successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  return (
    <div className="w-2/3">
      <h1 className='p-4 text-4xl text-center'>Add a Class</h1>
          <form onSubmit={handleProductAdd} className="w-full">
              <div className="flex gap-5 mt-7">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Class Image</span>
                    </label>
                    <input name="photo" type="text" placeholder="Class Image" className="input input-bordered border-primary" required/>
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text"> Class name</span>
                    </label>
                    <input name="category" type="text" placeholder="type class name" className="input input-bordered border-primary" required/>
                    
                  </div>
              </div>
              <div className="flex gap-5 mt-7">
              <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text"> Instructor name</span>
                  </label>
                  <input name="instructor" type="text" defaultValue={user?.displayName} placeholder=" Instructor name" className="input input-bordered border-primary" readOnly />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text"> Instructor email</span>
                  </label>
                  <input name="email" type="email" defaultValue={user?.email} placeholder=" Instructor email" className="input input-bordered border-primary" readOnly />
                </div>
              </div>
              <div className="flex gap-5 mt-7">
              <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text"> Available seats</span>
                  </label>
                  <input name="seats" type="number" placeholder=" Available seats" className="input input-bordered border-primary" required/>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input name="price" type="number" placeholder="Price" className="input input-bordered border-primary" required/>
                </div>
                <div className="form-control w-1/2 hidden">
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                  <input name="status" type="text" defaultValue={"pending"} placeholder="status" className="" readOnly required/>
                </div>
              </div> 
              <div className="form-control mt-6">
              <button className="btn btn-primary">Add Class</button>
              </div>
          </form>
    </div>
  );
};

export default AddClass;