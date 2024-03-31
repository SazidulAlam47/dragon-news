import { Helmet } from "react-helmet-async";

const ForgotPass = () => {
    return (
        <div className="col-span-4 pb-10">
            <Helmet>
                <title>Dragon News | Forgot Password</title>
            </Helmet>
            <div className="bg-white w-11/12 md:w-4/6 lg:w-1/2 mx-auto p-16">
                <h2 className="text-3xl font-semibold text-center text-gray-dark pb-2">
                    Forgot Password
                </h2>
                <p className="text-center font-normal text-gray-light pb-10 border-b border-dark6">
                    Enter your Email to reset your password
                </p>
                <form className="px-6 py-10 space-y-5">
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

                    <div className="form-control mt-6">
                        <button className="btn bg-gray-dark hover:bg-gray-light text-white rounded-none font-semibold text-xl h-14">
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;
