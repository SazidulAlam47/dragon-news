import Marquee from "react-fast-marquee";
import useData from "../../hooks/useData";

const LatestNews = () => {
    const { news } = useData();

    return (
        <div className="p-4 bg-gray-100 mt-10">
            <div className="flex items-center">
                <p className="rounded-none bg-red-pink text-white border-none text-lg sm:text-xl font-medium px-4 py-2 sm:px-6 sm:py-3">
                    Latest
                </p>
                <div className="p-1 text-lg font-semibold overflow-hidden">
                    <Marquee autoFill={true} pauseOnHover={true} speed={100}>
                        {news?.slice(0, 3).map((newsItem, idx) => (
                            <p key={idx} className="px-3">
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
