import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-7">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 sm:py-5 text-white container mx-auto px-3 md:px-6">
                <aside className="flex flex-col sm:flex-row items-center gap-3">
                    <Link to="/" className="font-oldEng text-lg">
                        The Dragon News
                    </Link>
                    <p className="text-sm"> © 2024 - All right reserved</p>
                </aside>
                <nav className="flex gap-3 text-lg">
                    <a
                        href="https://www.facebook.com/DailyStarNews/"
                        target="_blank"
                    >
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com/dailystarnews" target="_blank">
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.instagram.com/dailystar_bd/"
                        target="_blank"
                    >
                        <FaInstagram />
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
