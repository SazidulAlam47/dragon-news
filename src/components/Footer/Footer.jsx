import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-7">
            <div className="footer items-center p-4 text-neutral-content container mx-auto px-3 md:px-6">
                <aside className="items-center grid-flow-col">
                    <Link to="/" className="font-oldEng text-lg">
                        The Dragon News
                    </Link>
                    <p className="text-sm"> © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-lg">
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
