import {
    FaGoogle,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaFacebookF,
} from "react-icons/fa";

const RightSideBar = () => {
    return (
        <div className="space-y-7">
            <div className="space-y-3">
                <h2 className="text-xl font-semibold pb-5">Login With</h2>
                <button className="btn btn-block flex flex-nowrap text-[#3b68cf] border-[#3b68cf] font-medium bg-white">
                    <FaGoogle />
                    <span>Login with Google</span>
                </button>
                <button className="btn btn-block flex flex-nowrap text-gray-700 border-gray-700 font-medium bg-white">
                    <FaGithub />
                    <span>Login with GitHub</span>
                </button>
            </div>
            <div>
                <h2 className="text-xl font-semibold pb-5">Find Us On</h2>
                <a
                    href="#"
                    target="_blank"
                    className="flex gap-2 border items-center p-4 border-[#E7E7E7] rounded-t-lg font-medium text-gray-light"
                >
                    <div className="bg-[#f3f3f3] h-8 w-8 rounded-full flex justify-center items-center text-[#3b599c]">
                        <FaFacebookF />
                    </div>
                    <span>Facebook</span>
                </a>
                <a
                    href="#"
                    target="_blank"
                    className="flex gap-2 border items-center p-4 border-x-[#E7E7E7] font-medium text-gray-light"
                >
                    <div className="bg-[#f3f3f3] h-8 w-8 rounded-full flex justify-center items-center text-[#58a8de]">
                        <FaTwitter />
                    </div>
                    <span>Twitter</span>
                </a>
                <a
                    href="#"
                    target="_blank"
                    className="flex gap-2 border items-center p-4 border-[#E7E7E7] rounded-b-lg font-medium text-gray-light"
                >
                    <div className="bg-[#f3f3f3] h-8 w-8 rounded-full flex justify-center items-center text-[#e65d6e]">
                        <FaInstagram />
                    </div>
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
                        <button className="btn rounded-none bg-red-pink text-white border-none hover:bg-red-light">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
