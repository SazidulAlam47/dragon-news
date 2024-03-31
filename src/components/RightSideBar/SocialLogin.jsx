import { FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
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
    );
};

export default SocialLogin;
