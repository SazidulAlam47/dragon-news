import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-poppins overflow-hidden">
            <Outlet />
        </div>
    );
};

export default MainLayout;
