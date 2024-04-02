import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";

const About = () => {
    const { setClickedLocation } = useContext(AuthContext);
    useEffect(() => {
        setClickedLocation("");
    }, [setClickedLocation]);
    return (
        <div className="col-span-3 px-2 py-4 sm:p-8">
            <Helmet>
                <title>Dragon News | About</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
            <p className="text-gray-700 text-lg">
                Welcome to NewsPortal, your number one source for all the latest
                news. We&apos;re dedicated to providing you with the very best
                of news coverage, with an emphasis on reliability, reader
                engagement, and inclusively.
            </p>
            <p className="text-gray-700 text-lg mt-4">
                Founded in 2024 by John Doe, NewsPortal has come a long way from
                its beginnings. When John Doe first started out, their passion
                for journalism drove them to start their own news site.
            </p>
            <p className="text-gray-700 text-lg mt-4">
                We now serve readers all over the world and are thrilled that
                we&apos;re able to turn our passion into our own website.
            </p>
            <p className="text-gray-700 text-lg mt-4">
                We hope you enjoy our news as much as we enjoy offering them to
                you. If you have any questions or comments, please don&apos;t
                hesitate to contact us.
            </p>
        </div>
    );
};

export default About;
