import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import LatestNews from "../Home/LatestNews";

const About = () => {
    return (
        <div className="container mx-auto px-3 md:px-6">
            <Helmet>
                <title>Dragon News | About</title>
            </Helmet>
            <Header />
            <LatestNews />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6  w-[104%] md:w-full">
                <div className="col-span-3 p-8">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-4">
                            About Us
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Welcome to NewsPortal, your number one source for
                            all the latest news. We&apos;re dedicated to
                            providing you with the very best of news coverage,
                            with an emphasis on reliability, reader engagement,
                            and inclusively.
                        </p>
                        <p className="text-gray-700 text-lg mt-4">
                            Founded in 2024 by John Doe, NewsPortal has come a
                            long way from its beginnings. When John Doe first
                            started out, their passion for journalism drove them
                            to start their own news site.
                        </p>
                        <p className="text-gray-700 text-lg mt-4">
                            We now serve readers all over the world and are
                            thrilled that we&apos;re able to turn our passion
                            into our own website.
                        </p>
                        <p className="text-gray-700 text-lg mt-4">
                            We hope you enjoy our news as much as we enjoy
                            offering them to you. If you have any questions or
                            comments, please don&apos;t hesitate to contact us.
                        </p>
                    </div>
                </div>
                <RightSideBar />
            </div>
        </div>
    );
};

export default About;
