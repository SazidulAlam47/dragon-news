import { CiBookmark, CiShare2 } from "react-icons/ci";
import { HiMiniEye } from "react-icons/hi2";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeSingleNews = ({ newsItem }) => {
    return (
        <div>
            <div className="bg-dark7 flex justify-between items-center p-5 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <div>
                        <img
                            className="w-10 h-10 rounded-full"
                            src={newsItem.author.img}
                            alt="author"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-dark">
                            {newsItem.author.name}
                        </h4>
                        <p className="text-gray-light text-sm">
                            {newsItem.author.published_date?.slice(0, 10)}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button>
                        <CiBookmark className="w-6 h-6" />
                    </button>
                    <button>
                        <CiShare2 className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div className="border border-dark7 py-4 px-5 rounded-b-lg">
                <h3 className="text-xl font-bold">{newsItem.title}</h3>
                <div className="mt-5 mb-7">
                    <img src={newsItem.image_url} alt="news" />
                </div>
                <div>
                    <p className="font-normal text-gray-light">
                        {newsItem.details.length > 250
                            ? `${newsItem.details.slice(0, 250)}...`
                            : newsItem.details}
                    </p>
                    <Link
                        to={`/news/${newsItem._id}`}
                        className="bg-gradient-to-r from-[#F75B5F] to-[#FF8C47] inline-block text-transparent bg-clip-text font-semibold"
                    >
                        Read More
                    </Link>
                </div>
                <div className="flex justify-between border-t border-dark7 py-5 mt-5">
                    <div className="flex items-center gap-2">
                        <div className="rating">
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                        </div>
                        <p className="text-gray-light font-medium">
                            {newsItem.rating.number}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 font-medium text-gray-light">
                        <HiMiniEye />
                        <p>{newsItem.total_view ? newsItem.total_view : 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

HomeSingleNews.propTypes = {
    newsItem: PropTypes.object.isRequired,
};

export default HomeSingleNews;