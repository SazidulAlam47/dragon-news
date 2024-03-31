import PropTypes from "prop-types";
import { CiCalendar } from "react-icons/ci";
import formatDate from "../../utils/formatDate";
import { Link } from "react-router-dom";

const DetailsPageSingleNews = ({ newsItem }) => {
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
                <div className="flex gap-1 text-gray-light pt-5">
                    <CiCalendar className="w-6 h-6" />
                    <p>{formatDate(newsItem.author.published_date)}</p>
                </div>
            </Link>
        </div>
    );
};

DetailsPageSingleNews.propTypes = {
    newsItem: PropTypes.object.isRequired,
};

export default DetailsPageSingleNews;
