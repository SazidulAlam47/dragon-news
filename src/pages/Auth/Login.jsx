import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="col-span-4 pb-10">
            <Helmet>
                <title>Dragon News | Login</title>
            </Helmet>
            <div className="bg-white w-11/12 md:w-4/6 lg:w-1/2 mx-auto p-16">
                <h2 className="text-3xl font-semibold text-center pb-12 border-b border-dark6 text-gray-dark">
                    Login your account
                </h2>
                <form className="px-6 py-12 space-y-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-gray-dark">
                                Email
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="input rounded-none bg-dark7 placeholder:font-normal placeholder:text-base h-14"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-gray-dark ">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input rounded-none bg-dark7 placeholder:font-normal placeholder:text-base h-14"
                            required
                        />
                        <label className="label">
                            <Link
                                to="/forgot-password"
                                className="label-text-alt link link-hover text-sm text-gray-light"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gray-dark hover:bg-gray-light text-white rounded-none font-semibold text-xl h-14">
                            Login
                        </button>
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
