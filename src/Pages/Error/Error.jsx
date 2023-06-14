import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="text-center">
                <h3 className="text-7xl text-black">404</h3>
                <h3 className="text-xl text-black">Opps this page is not found</h3>
                <p><Link to="/" className="mt-5 btn btn-primary">go to home</Link></p>
            </div>
        </div>
    );
};

export default Error;