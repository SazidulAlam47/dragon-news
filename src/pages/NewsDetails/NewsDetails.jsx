import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const NewsDetails = () => {
    const newsTitle = " News Details";

    return (
        <div className="container mx-auto px-3 md:px-6">
            <Helmet>
                <title>{`Dragon News | ${newsTitle}`}</title>
            </Helmet>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6  w-[104%] md:w-full">
                <div className="col-span-3">
                    <p>here is the details</p>
                </div>
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsDetails;
