import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import LatestNews from "../components/Marquee/Marquee";
import Navbar from "../components/Navbar/Navbar";
import LeftNavigation from "../components/LeftNavigation/LeftNavigation";
import RightSideBar from "../components/RightSideBar/RightSideBar";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="font-poppins overflow-hidden container mx-auto px-3 md:px-6">
            {location.pathname !== "/register" &&
                location.pathname !== "/login" && <Header />}
            {(location.pathname === "/" ||
                location.pathname === "/about" ||
                location.pathname === "/career" ||
                /\/category\/\d/.test(location.pathname)) && <LatestNews />}
            {!/\/news\/\S+/.test(location.pathname) && <Navbar />}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 w-[104%] md:w-full">
                {(location.pathname === "/" ||
                    /\/category\/\d/.test(location.pathname)) && (
                    <LeftNavigation />
                )}
                <Outlet />
                {location.pathname !== "/register" &&
                    location.pathname !== "/login" && <RightSideBar />}
            </div>
        </div>
    );
};

export default MainLayout;
