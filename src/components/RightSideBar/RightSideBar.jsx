import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const RightSideBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="space-y-7 md:w-full">
            {!user && <SocialLogin />}
            <div>
                <h2 className="text-xl font-semibold pb-5">Find Us On</h2>
                <a
                    href="https://www.facebook.com/DailyStarNews/"
                    target="_blank"
                    className="flex gap-2 border items-center p-4 border-[#E7E7E7] rounded-t-lg font-medium text-gray-light"
                >
                    <span className="bg-[#f3f3f3] h-8 w-8 rounded-full flex justify-center items-center text-[#3b599c]">
                        <FaFacebookF />
                    </span>
                    <span>Facebook</span>
                </a>
                <a
                    href="https://twitter.com/dailystarnews"
                    target="_blank"
                    className="flex gap-2 border items-center p-4 border-x-[#E7E7E7] font-medium text-gray-light"
                >
                    <span className="bg-[#f3f3f3] h-8 w-8 rounded-full flex justify-center items-center text-[#58a8de]">
                        <FaTwitter />
                    </span>
                    <span>Twitter</span>
                </a>
                <a
                    href="https://www.instagram.com/dailystar_bd/"
                    target="_blank"
                    className="flex gap-2 border items-center p-4 border-[#E7E7E7] rounded-b-lg font-medium text-gray-light"
                >
                    <span className="bg-[#f3f3f3] h-8 w-8 rounded-full flex justify-center items-center text-[#e65d6e]">
                        <FaInstagram />
                    </span>
                    <span>Instagram</span>
                </a>
            </div>
            <div className="bg-dark7 p-4 flex flex-col">
                <h2 className="text-xl font-semibold pb-5">Q-Zone</h2>
                <img src="/assets/qZone1.png" alt="qZone1" />
                <img src="/assets/qZone2.png" alt="qZone2" />
                <img src="/assets/qZone3.png" alt="qZone3" />
            </div>
            <div
                className=" px-8 py-16"
                style={{
                    backgroundImage: "url(/assets/bg.png)",
                }}
            >
                <div className="text-center text-white">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold">
                            Create an Amazing Newspaper
                        </h1>
                        <p className="font-normal">
                            Discover thousands of options, easy to customize
                            layouts, one-click to import demo and much more.
                        </p>
                        <a
                            href="https://github.com/SazidulAlam47/dragon-news"
                            target="_blank"
                            className="btn rounded-none bg-red-pink text-white border-none hover:bg-red-light"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
