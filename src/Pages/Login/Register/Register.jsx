import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import regIcon from '../../../assets/icon/key.png'

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const password = watch('password')
    return (
        <div>
            <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl  lg:w-1/2">
                    <div className="text-center">
                        <img className="w-16 mx-auto" src={regIcon} />
                    </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                    <input type="name" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
                    {errors.name && <span className="text-red-500">name field is required</span>}
                    </div>
                    <div className="form-control">
                    <input type="photo" placeholder="photo" {...register("photo", { required: true })} className="input input-bordered" />
                    {errors.photo && <span className="text-red-500">photo field is required</span>}
                    </div>
                    <div className="form-control">
                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                    {errors.email && <span className="text-red-500">email field is required</span>}
                    </div>
                    <div className="form-control">
                    <input type={`${showPass ? 'text' : 'password'}`} placeholder="password" {...register("password",{ required: true, minLength: 6 }, { pattern:  /^(?=.*[A-Z])(?=.*[!@#$%^&*])/ })} className="input input-bordered" />
                    {errors.password && <span className="text-red-500">password should be at least 6 charter, one uppercase and one special charter</span>}
                    </div>
                    <div className="form-control">
                    <input type={`${showPass ? 'text' : 'password'}`} placeholder="confirm password" {...register("confirm", {validate: (value) => value === password || 'Passwords do not match',}, { required: true })} className="input input-bordered" />
                    {(errors.confirm ) && <span className="text-red-500">{errors.confirm.message}</span>}
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
                    <button type="submit" className="btn btn-primary">Register</button>
                    <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;