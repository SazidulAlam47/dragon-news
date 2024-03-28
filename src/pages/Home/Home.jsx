import Header from "../../components/Header/Header";
import LeftNavigation from "../../components/LeftNavigation/LeftNavigation";
import Navbar from "../../components/Navbar/Navbar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import LatestNews from "./LatestNews";

const Home = () => {
    return (
        <div className="container mx-auto px-3 md:px-6">
            <Header />
            <LatestNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6  w-[104%] md:w-full">
                <LeftNavigation />
                <div className="col-span-2">
                    News is coming ... Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Iste sit, sequi maxime magni facere quam,
                    consectetur unde at consequuntur eius fuga exercitationem
                    vel dolorum veritatis velit veniam? Odit, asperiores
                    consectetur. changed
                </div>
                <RightSideBar />
            </div>
        </div>
    );
};

export default Home;
