import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftNavigation from "../../components/LeftNavigation/LeftNavigation";
import Navbar from "../../components/Navbar/Navbar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import useData from "../../hooks/useData";
import HomeSingleNews from "./HomeSingleNews";
import LatestNews from "./LatestNews";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

const Home = () => {
    const { news, categories } = useData();
    const { id } = useParams();
    const location = useLocation();
    const [filterNews, setFilterNews] = useState([]);
    const [categoryName, setCategoryName] = useState([]);

    useEffect(() => {
        if (location.pathname === "/") {
            setFilterNews(news);
        } else {
            setFilterNews(
                news.filter((newsItem) => newsItem.category_id === id)
            );
            setCategoryName(
                categories?.find((category) => category.id == id)?.name
            );
        }
    }, [location.pathname, id, news, categories]);

    return (
        <div className="container mx-auto px-3 md:px-6">
            <Helmet>
                <title>
                    {location.pathname === "/"
                        ? "Dragon News"
                        : `Dragon News | ${categoryName}`}
                </title>
            </Helmet>
            <Header />
            <LatestNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6  w-[104%] md:w-full">
                <LeftNavigation />
                <div className="col-span-2">
                    <h2 className="text-xl font-semibold pb-5">
                        Dragon News Home
                    </h2>
                    {filterNews.length ? (
                        <div className="space-y-4">
                            {filterNews?.map((newsItem, idx) => (
                                <HomeSingleNews key={idx} newsItem={newsItem} />
                            ))}
                        </div>
                    ) : (
                        <div className="h-[50vh] flex justify-center items-center">
                            <p className="font-semibold text-gray-light">
                                There is noting in this category
                            </p>
                        </div>
                    )}
                </div>
                <RightSideBar />
            </div>
        </div>
    );
};

export default Home;
