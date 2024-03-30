import { useLocation, useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import HomeSingleNews from "./HomeSingleNews";
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
        <div className="col-span-2">
            <Helmet>
                <title>
                    {location.pathname === "/"
                        ? "Dragon News"
                        : `Dragon News | ${categoryName}`}
                </title>
            </Helmet>
            <h2 className="text-xl font-semibold pb-5">Dragon News Home</h2>
            {filterNews.length ? (
                <div className="space-y-4">
                    {filterNews?.map((newsItem) => (
                        <HomeSingleNews
                            key={newsItem._id}
                            newsItem={newsItem}
                        />
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
    );
};

export default Home;
