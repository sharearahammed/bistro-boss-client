import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const npHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            { npHeaderFooter || <Navbar></Navbar> }
            <Outlet></Outlet>
            { npHeaderFooter || <Footer></Footer> }
        </div>
    );
};

export default Main;