import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import formatFirebaseError from "../../utils/formatFirebaseError";

const ForgotPass = () => {
    const navigate = useNavigate();
    const { passwordReset } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handelForgotPass = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");

        console.log(email);
        if (email === "") {
            setError("Please fill in the email address");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address");
            return;
        }
        setError("");
        passwordReset(email)
            .then(() => {
                Swal.fire({
                    title: "Please check your email",
                    text: `Check your ${email} for a link to reset your password.`,
                    imageUrl: "https://i.ibb.co/D9Qg6M1/mail.png",
                    imageWidth: 128,
                    imageHeight: 128,
                    imageAlt: "Email",
                });
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
                setError(formatFirebaseError(err));
            });
    };

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
                <form
                    onSubmit={handelForgotPass}
                    className="px-6 py-10 space-y-5"
                >
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
                            required
                        />
                    </div>
                    <div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gray-dark hover:bg-gray-light text-white rounded-none font-semibold text-xl h-14">
                                Reset Password
                            </button>
                        </div>
                        {error && (
                            <div>
                                <p className="text-red-600 pt-3">{error}</p>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;
