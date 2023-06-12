
import pic1 from '../../../assets/blogs/blog1.jpg'
import pic2 from '../../../assets/blogs/blog2.jpg'
import pic3 from '../../../assets/blogs/blog3.jpg'

const Blogs = () => {

    return (
        <>
        <h3 className="text-3xl text-black text-center mb-10">Our Blogs</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="card hover:bg-slate-300 duration-500 bg-slate-100 border border-primary">
            <figure className="">
                <img src={pic1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">10 min Latin Dance Workout</h2>
                <p>What is Latin dance? The new common language will be more simple and regular than the existing European languages. It will be as simple...</p>
                <div className="card-actions">
                <button className="btn btn-primary">Read More</button>
                </div>
            </div>
            </div>
            <div className="card hover:bg-slate-300 duration-500 bg-slate-100 border border-primary">
            <figure className="">
                <img src={pic2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">10 min Latin Dance Workout</h2>
                <p>What is Latin dance? The new common language will be more simple and regular than the existing European languages. It will be as simple...</p>
                <div className="card-actions">
                <button className="btn btn-primary">Read More</button>
                </div>
            </div>
            </div>
            <div className="card hover:bg-slate-300 duration-500 bg-slate-100 border border-primary">
            <figure className="">
                <img src={pic3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">10 min Latin Dance Workout</h2>
                <p>What is Latin dance? The new common language will be more simple and regular than the existing European languages. It will be as simple...</p>
                <div className="card-actions">
                <button className="btn btn-primary">Read More</button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Blogs;