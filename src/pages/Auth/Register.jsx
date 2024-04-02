import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import TermsAndConditions from "./TermsAndConditions";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import formatFirebaseError from "../../utils/formatFirebaseError";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateInfo } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photoURL = form.get("photoURL");
        const email = form.get("email");
        const password = form.get("password");
        const agree = Boolean(form.get("agree"));

        if (name === "") {
            setError("Please enter your name");
            return;
        } else if (email === "") {
            setError("Please enter your email address.");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email");
            return;
        } else if (password === "") {
            setError("Please fill in the password");
            return;
        } else if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        } else if (!/[a-z]/.test(password) && !/[A-Z]/.test(password)) {
            setError("Password must contain at least one letter");
            return;
        } else if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter");
            return;
        } else if (!/[0-9]/.test(password)) {
            setError("Password must contain at least one number");
            return;
        } else if (
            !/(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)
        ) {
            setError("Password must contain at least one special character");
            return;
        } else if (!agree) {
            setError("You must agree to the terms and conditions");
            return;
        }
        setError(""); // clear the error message
        createUser(email, password)
            .then((result) => {
                const profile = {
                    displayName: name,
                    photoURL: photoURL,
                };
                updateInfo(result.user, profile)
                    .then(() => {
                        console.log("profile updated", result.user);
                        navigate("/login");
                    })
                    .catch((error) => {
                        console.error(error.message);
                    });
            })
            .catch((err) => {
                setError(formatFirebaseError(err));
            });
    };

    return (
        <div className="col-span-4">
            <Helmet>
                <title>Dragon News | Register</title>
            </Helmet>
            <div className="bg-white w-11/12 md:w-4/6 lg:w-1/2 mx-auto px-1 py-8 sm:px-8 xl:px-16 lg:py-16">
                <h2 className="text-3xl font-semibold text-center pb-6 lg:pb-12 border-b border-dark6 text-gray-dark">
                    Register your account
                </h2>
                <form
                    onSubmit={handleRegister}
                    className="px-4 md:px-6 py-6 md:py-12 space-y-5"
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
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-gray-dark ">
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
                                className="absolute cursor-pointer right-4 top-5"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <IoEyeOff className="w-5 h-5" />
                                ) : (
                                    <IoEye className="w-5 h-5" />
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm sm:text-base">
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
                            onClick={() =>
                                document
                                    .getElementById("TermsAndConditions")
                                    .showModal()
                            }
                        >
                            Term & Conditions
                        </span>
                    </div>
                    <div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gray-dark hover:bg-gray-light text-white rounded-none font-semibold text-xl h-14">
                                Register
                            </button>
                        </div>
                        {error && <p className="text-red-600 pt-2">{error}</p>}
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
