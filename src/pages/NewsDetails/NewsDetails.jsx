import { Link, useLoaderData, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const NewsDetails = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const newsItem = news?.find((news) => news._id === id);

    return (
        <div className="col-span-3">
            <h3 className="text-xl font-semibold pb-5">Dragon News</h3>
            <div className="p-7 border border-dark6 rounded-lg">
                <div className="mb-5">
                    <img className="w-full" src={newsItem.image_url} alt="" />
                </div>
                <h3 className="text-2xl font-bold pb-3">{newsItem.title}</h3>
                <p className="font-normal text-gray-light pb-7">
                    {newsItem.details}
                </p>
                <Link
                    to={`/category/${newsItem.category_id}`}
                    className="btn rounded-none bg-red-pink text-white border-none hover:bg-red-light font-medium text-lg"
                >
                    <GoArrowLeft />
                    <span>All news in this category</span>
                </Link>
            </div>
        </div>
    );
};

export default NewsDetails;
