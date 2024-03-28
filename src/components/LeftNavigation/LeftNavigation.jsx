import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import LeftSingleNews from "./LeftSingleNews";
import useData from "../../hooks/useData";

const SingleNav = ({ pageTitle, path }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive
                    ? "text-gray-dark bg-dark6 py-4 px-11 font-semibold rounded-md"
                    : "text-gray-light py-4 px-11 font-semibold"
            }
            to={path}
        >
            {pageTitle}
        </NavLink>
    );
};

const LeftNavigation = () => {
    const { news, categories } = useData();

    return (
        <div>
            <div>
                <h2 className="text-xl font-semibold pb-5">All Category</h2>
                <div className="flex flex-col">
                    {categories.map((category) => (
                        <SingleNav
                            key={category.id}
                            pageTitle={category.name}
                            path={
                                category.id == 0
                                    ? "/"
                                    : `/category/${category.id}`
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="space-y-5 py-7">
                {news.slice(0, 3).map((newsItem) => (
                    <LeftSingleNews key={newsItem.id} newsItem={newsItem} />
                ))}
            </div>
        </div>
    );
};

SingleNav.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default LeftNavigation;
