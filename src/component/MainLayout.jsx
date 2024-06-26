import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const MainLayout = () => {

    return (
        <div >


            <div className="mx-10">
            <Header></Header>
            <div className="min-h-[calc(100vh-304px)]">
            <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;