import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import formatFirebaseError from "../../utils/formatFirebaseError";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
    const navigate = useNavigate();
    const { signInWithPassword, firebaseError } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (firebaseError) {
            setError(formatFirebaseError(firebaseError));
        }
    }, [firebaseError]);

    const handelLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        if (email === "") {
            setError("Please fill in the email address");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email");
            return;
        } else if (password === "") {
            setError("Please fill in the password");
            return;
        }
        setError("");
        signInWithPassword(email, password)
            .then((result) => {
                console.log(result.user);
                if (!result.user.emailVerified) {
                    setError("Please verify your email");
                } else {
                    navigate("/");

                    toast.success("Login Successful", {
                        position: "top-center",
                        autoClose: 200,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch((err) => {
                setError(formatFirebaseError(err));
            });
    };

    return (
        <div className="col-span-4 pb-10">
            <Helmet>
                <title>Dragon News | Login</title>
            </Helmet>
            <div className="bg-white w-11/12 md:w-4/6 lg:w-1/2 mx-auto p-16">
                <h2 className="text-3xl font-semibold text-center pb-12 border-b border-dark6 text-gray-dark">
                    Login your account
                </h2>
                <form onSubmit={handelLogin} className="px-6 py-12 space-y-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-gray-dark">
                                Email
                            </span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email address"
                            className="input rounded-none bg-dark7 placeholder:font-normal placeholder:text-base h-14"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-gray-dark">
                                Password
                            </span>
                        </label>
                        <div className="form-control relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input rounded-none bg-dark7 placeholder:font-normal placeholder:text-base h-14"
                            />
                            <span
                                className="cursor-pointer absolute right-4 top-5"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <IoEyeOff className="w-5 h-5" />
                                ) : (
                                    <IoEye className="w-5 h-5" />
                                )}
                            </span>
                        </div>
                        <label className="label">
                            <Link
                                to="/forgot-password"
                                className="label-text-alt link link-hover text-sm text-gray-light"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>
                    <div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gray-dark hover:bg-gray-light text-white rounded-none font-semibold text-xl h-14">
                                Login
                            </button>
                        </div>
                        {error && (
                            <div>
                                <p className="text-red-600 pt-3">{error}</p>
                            </div>
                        )}
                    </div>
                </form>
                <p className="text-center font-semibold text-gray-light">
                    Don&apos;t Have An Account ?{" "}
                    <Link
                        to="/register"
                        className="bg-gradient-to-r from-[#F75B5F] to-[#FF8C47] inline-block text-transparent bg-clip-text"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
