import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    
    return (
        <footer className="bg-gray-200 py-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="mb-4">
                <Link to="/" className="normal-case text-xl">Dance Learning <span className="text-primary">School</span></Link>
                    <p className="text-gray-500 mt-2 mb-4">The most dancing club. you can easily learn dance with us</p>
                    <p className="text-gray-500">123 Main Street, City, Country</p>
                    <p className="text-gray-500">Phone: 123-456-7890</p>
                    <p className="text-gray-500">Email: info@company.com</p>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-bold mb-2">Open Hours</h4>
                    <p className="text-gray-500">Tuesday-Friday 11am-8pm</p>
                    <p className="text-gray-500">Saturday 10am-6pm</p>
                    <p className="text-gray-500">Sunday 11am-6pm</p>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-bold mb-2">Quick Links</h4>
                    <ul className="text-gray-500">
                    <li className="mb-1">
                        <a href="/about">About Us</a>
                    </li>
                    <li className="mb-1">
                        <a href="/services">Services</a>
                    </li>
                    <li className="mb-1">
                        <a href="/products">Products</a>
                    </li>
                    <li className="mb-1">
                        <a href="/contact">Contact Us</a>
                    </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h4 className="text-lg font-bold mb-2">Follow Us</h4>
                    <p className="text-gray-500"><Link>Facebook</Link></p>
                    <p className="text-gray-500"><Link>Twitter</Link></p>
                    <p className="text-gray-500"><Link>Instagram</Link></p>
                </div>
                </div>
                <div className="text-center mt-4">
                <p className="text-gray-500">
                    &copy; 2023 Dancing Learning School. All rights reserved.
                </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;