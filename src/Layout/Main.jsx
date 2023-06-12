
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
const Main = () => {
    
    return (
        <div>
            {<Navbar></Navbar>}
            <Outlet></Outlet>
            {<Footer></Footer>}
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;