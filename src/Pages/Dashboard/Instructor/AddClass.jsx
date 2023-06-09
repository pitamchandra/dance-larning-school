import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const AddClass = () => {
    const { user } = useContext(AuthContext)
  console.log(user)

  const handleProductAdd = event => {
    event.preventDefault();

    const form = event.target;
    const instractor = user?.displayName;
    const photo = form.photo.value;
    const className = form.className.value;
    const catagory = form.catagory.value;
    const seats = form.seats.value;
    const price = form.price.value;
    const email = user?.email;

    const addClass = {
      instractor,
      email,
      photo,
      catagory,
      className,
      price,
      seats: parseInt(seats)

    }
    console.log(addClass)
    // console.log(addToys)

    fetch("http://localhost:5000/addclass", {
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
            alert('okay')
          // console.log("kskks")

        }
      })
  }
  return (
    <div>
       
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Your Class Details</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <form onSubmit={handleProductAdd} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input name="photo" type="text" placeholder="Class Image" className="input input-bordered" />
                <label className="label">
                  <span className="label-text"> Class name</span>

                </label>
                <select name="catagory" className="select select-primary w-full max-w-xs">
                  <option disabled selected>Select class name</option>
                  <option>Folk dance</option>
                  <option>Baul dance.</option>
                  <option>Kathakal Dance</option>
                  <option>Manipuri Dance</option>
                  <option>Puppet dance.</option>
                </select>
                <label className="label">
                  <span className="label-text"> Instructor name</span>
                </label>
                <input name="instractor" type="text" defaultValue={user?.displayName} placeholder=" Instructor name" className="input input-bordered" readOnly />
                <label className="label">
                  <span className="label-text"> Instructor email</span>
                </label>
                <input name="email" type="email" defaultValue={user?.email} placeholder=" Instructor email" className="input input-bordered" readOnly />
                <label className="label">
                  <span className="label-text"> Available seats</span>
                </label>
                <input name="seats" type="number" placeholder=" Available seats" className="input input-bordered" />


              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input name="price" type="number" placeholder="Price" className="input input-bordered" />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Class</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;