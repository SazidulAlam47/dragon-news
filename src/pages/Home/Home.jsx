import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import LeftNavigation from "../../components/LeftNavigation/LeftNavigation";
import Navbar from "../../components/Navbar/Navbar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import useData from "../../hooks/useData";
import HomeSingleNews from "./HomeSingleNews";
import LatestNews from "./LatestNews";

const Home = () => {
    const { news } = useData();
    return (
        <div className="container mx-auto px-3 md:px-6">
            <Helmet>
                <title>Dragon News</title>
            </Helmet>
            <Header />
            <LatestNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-[104%] md:w-full">
                <LeftNavigation />
                <div className="col-span-2">
                    <h2 className="text-xl font-semibold pb-5">
                        Dragon News Home
                    </h2>
                    <div className="space-y-4">
                        {news?.map((newsItem, idx) => (
                            <HomeSingleNews key={idx} newsItem={newsItem} />
                        ))}
                    </div>
                </div>
                <RightSideBar />
            </div>
        </div>
    );
};

export default Home;
