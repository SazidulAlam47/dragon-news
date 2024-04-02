import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TermsAndConditions from "./TermsAndConditions";

const Register = () => {
    const handelTerms = () => {
        document.getElementById("TermsAndConditions").showModal();
    };

    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photoURL = form.get("photoURL");
        const email = form.get("email");
        const password = form.get("password");
        console.log({ name, photoURL, email, password });
    };

    return (
        <div className="col-span-4">
            <Helmet>
                <title>Dragon News | Register</title>
            </Helmet>
            <div className="bg-white w-11/12 md:w-4/6 lg:w-1/2 mx-auto p-16">
                <h2 className="text-3xl font-semibold text-center pb-12 border-b border-dark6 text-gray-dark">
                    Register your account
                </h2>
                <form
                    onSubmit={handelRegister}
                    className="px-6 py-12 space-y-5"
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-gray-dark">
                                Your Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input rounded-none bg-dark7 placeholder:font-normal placeholder:text-base h-14"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-gray-dark">
                                Photo URL
                            </span>
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Enter your photo URL here"
                            className="input rounded-none bg-dark7 placeholder:font-normal placeholder:text-base h-14"
                        />
                    </div>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-gray-dark ">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input rounded-none bg-dark7 placeholder:font-normal placeholder:text-base h-14"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm"
                            name="agree"
                            id="agree"
                        />
                        <label htmlFor="agree">
                            <span className="form-checkbox-label font-normal text-gray-light">
                                Accept{" "}
                            </span>
                        </label>
                        <span
                            className="font-semibold cursor-pointer"
                            onClick={handelTerms}
                        >
                            Term & Conditions
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gray-dark hover:bg-gray-light text-white rounded-none font-semibold text-xl h-14">
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center font-semibold text-gray-light">
                    Already Have An Account ?{" "}
                    <Link
                        to="/login"
                        className="bg-gradient-to-r from-[#F75B5F] to-[#FF8C47] inline-block text-transparent bg-clip-text"
                    >
                        Login
                    </Link>
                </p>
            </div>

            <dialog id="TermsAndConditions" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <TermsAndConditions />
                </div>
            </dialog>
        </div>
    );
};

export default Register;
