import moment from "moment";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="text-center pt-11">
            <Link to="/">
                <h2 className="font-oldEng text-6xl text-gray-dark">
                    The Dragon News
                </h2>
            </Link>
            <p className="text-lg text-gray-light pt-5 pb-2">
                Journalism Without Fear or Favour
            </p>
            <p className="text-gray-light text-xl font-medium">
                <span className="text-gray-dark">
                    {moment().format("dddd, ")}
                </span>
                {moment().format("MMMM D, YYYY")}
            </p>
        </div>
    );
};

export default Header;
