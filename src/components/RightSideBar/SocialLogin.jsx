import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import formatFirebaseError from "../../utils/formatFirebaseError";
import { AuthContext } from "../../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext);

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);

                toast.success("Login Successful", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            })
            .catch((err) => {
                console.log(err.message);

                toast.error(formatFirebaseError(err), {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            });
    };

    const handleGithub = () => {
        githubLogin()
            .then((result) => {
                console.log(result.user);

                toast.success("Login Successful", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            })
            .catch((err) => {
                console.log(err.message);

                toast.error(formatFirebaseError(err), {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            });
    };

    return (
        <div className="space-y-3">
            <h2 className="text-xl font-semibold pb-5">Login With</h2>

            <button
                onClick={handleGoogle}
                className="btn btn-block flex flex-nowrap text-[#3b68cf] border-[#3b68cf] font-medium bg-white"
            >
                <FaGoogle />
                <span>Login with Google</span>
            </button>
            <button
                onClick={handleGithub}
                className="btn btn-block flex flex-nowrap text-gray-700 border-gray-700 font-medium bg-white"
            >
                <FaGithub />
                <span>Login with GitHub</span>
            </button>
        </div>
    );
};

export default SocialLogin;
