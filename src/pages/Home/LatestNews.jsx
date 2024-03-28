import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get("/data/news.json")
            .then((res) => setNews(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="flex items-start justify-start p-4 bg-gray-100 my-9 overflow-hidden">
            <div className="flex gap-1 items-center justify-end">
                <div className="w-28">
                    <div className="flex items-center justify-center flex-1  py-2 px-6 bg-red-pink">
                        <p className="text-xl font-medium leading-loose text-white">
                            Latest
                        </p>
                    </div>
                </div>
                <div className="text-lg font-semibold leading-loose text-gray-700 w-full">
                    <Marquee autoFill={true} pauseOnHover={true} speed={100}>
                        {news?.slice(0, 3).map((newsItem) => (
                            <p key={newsItem.id} className="px-3">
                                {newsItem.title}.
                            </p>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
