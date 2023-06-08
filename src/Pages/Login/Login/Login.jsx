import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  lg:w-1/2">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                    {errors.email && <span className="text-red-500">email field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={`${showPass ? 'text' : 'password'}`} placeholder="password" {...register("password", { required: true })} className="input input-bordered" />
                    {errors.password && <span className="text-red-500">password field is required</span>}
                    <label className="label">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" onClick={()=>setShowPass(!showPass)} className="checkbox checkbox-primary" />
                            <span className="label-text ml-2">Show Password</span> 
                        </label>
                    </div>
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p className="text-center mt-4">Don&apos;t have an account? <Link to="/register" className="text-primary">Register</Link></p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;