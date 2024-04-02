import Marquee from "react-fast-marquee";
import useData from "../../hooks/useData";
import { Link } from "react-router-dom";

const LatestNews = () => {
    const { news } = useData();

    return (
        <div className="p-2 sm:p-4 bg-gray-100 mt-10">
            <div className="flex items-center">
                <p className="rounded-none bg-red-pink text-white border-none text-sm sm:text-xl font-medium px-3 py-2 sm:px-6 sm:py-3">
                    Latest
                </p>
                <div className="p-1 text-sm sm:text-lg font-semibold overflow-hidden">
                    <Marquee autoFill={true} pauseOnHover={true} speed={100}>
                        {news?.slice(0, 3).map((newsItem) => (
                            <Link
                                to={`/news/${newsItem._id}`}
                                key={newsItem._id}
                                className="px-3"
                            >
                                {newsItem.title}.
                            </Link>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
