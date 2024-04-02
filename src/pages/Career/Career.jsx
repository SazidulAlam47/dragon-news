import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";

const Career = () => {
    const { setClickedLocation } = useContext(AuthContext);
    useEffect(() => {
        setClickedLocation("");
    }, [setClickedLocation]);
    return (
        <div className="col-span-3 px-2 py-4 sm:p-8">
            <Helmet>
                <title>Dragon News | Career</title>
            </Helmet>

            <h2 className="text-3xl font-bold text-center mb-4">
                Join Our Team
            </h2>
            <p className="text-gray-700 text-lg">
                At NewsPortal, we believe in fostering a dynamic and
                collaborative work environment that encourages creativity and
                innovation. We are always looking for talented individuals who
                are passionate about journalism and committed to delivering
                quality news.
            </p>
            <p className="text-gray-700 text-lg mt-4">
                As a member of our team, you&apos;ll have the opportunity to
                work alongside experienced journalists, editors, and industry
                professionals. We value diversity and inclusion, and we strive
                to create an inclusive workplace where every voice is heard and
                respected.
            </p>
            <p className="text-gray-700 text-lg mt-4">
                If you&apos;re passionate about storytelling, breaking news,
                investigative reporting, or any other aspect of journalism, we
                want to hear from you. Check out our current job openings below
                and take the first step towards joining the NewsPortal team.
            </p>
            <p className="text-gray-700 text-lg mt-4">
                We offer competitive salaries, comprehensive benefits, and
                opportunities for growth and advancement. Join us in our mission
                to inform, educate, and empower readers around the world through
                quality journalism.
            </p>
        </div>
    );
};

export default Career;
