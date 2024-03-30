import PropTypes from "prop-types";
import { CiCalendar } from "react-icons/ci";
import formatDate from "../../utils/formatDate";
import useData from "../../hooks/useData";
import { Link } from "react-router-dom";

const LeftSingleNews = ({ newsItem }) => {
    const { categories } = useData();

    return (
        <div>
            <Link to={`/news/${newsItem._id}`}>
                <div className="overflow-hidden">
                    <img
                        className="hover:scale-105 transition"
                        src={newsItem.image_url}
                    />
                </div>
                <h3 className="pt-5 text-xl font-semibold text-gray-dark hover:text-red-pink transition">
                    {newsItem.title}
                </h3>
                <div className="flex justify-between font-medium pt-1">
                    <p className="text-gray-dark">
                        {
                            categories?.find(
                                (category) =>
                                    category.id == newsItem.category_id
                            )?.name
                        }
                    </p>
                    <div className="flex gap-1 text-gray-light">
                        <CiCalendar className="w-6 h-6" />
                        <p>{formatDate(newsItem.author.published_date)}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

LeftSingleNews.propTypes = {
    newsItem: PropTypes.object.isRequired,
};

export default LeftSingleNews;
