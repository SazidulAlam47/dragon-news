import { Link, useLoaderData, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import DetailsPageSingleNews from "./DetailsPageSingleNews";

const NewsDetails = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const selectedNews = news?.find((news) => news._id === id);

    return (
        <div className="col-span-3">
            <h3 className="text-xl font-semibold pb-5">Dragon News</h3>
            <div className="p-3 sm:p-7 border border-dark6 rounded-lg">
                <div className="mb-5">
                    <img
                        className="w-full"
                        src={selectedNews.image_url}
                        alt=""
                    />
                </div>
                <h3 className="text-2xl font-bold pb-3">
                    {selectedNews.title}
                </h3>
                <p className="font-normal text-gray-light pb-7">
                    {selectedNews.details}
                </p>
                <Link
                    to={`/category/${selectedNews.category_id}`}
                    className="btn rounded-none bg-red-pink text-white border-none hover:bg-red-light font-medium  text-sm sm:text-lg inline-flex items-center"
                >
                    <GoArrowLeft />
                    <span>All news in this category</span>
                </Link>
            </div>
            <div className="py-7">
                <h3 className="text-xl font-semibold pb-5">Editors Insight</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
                    {news
                        .filter(
                            (newsItem) =>
                                newsItem.category_id == selectedNews.category_id
                        )
                        .map((newsItem) => (
                            <DetailsPageSingleNews
                                key={newsItem._id}
                                newsItem={newsItem}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
