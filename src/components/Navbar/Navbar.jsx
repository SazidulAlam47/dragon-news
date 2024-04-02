import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "/assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";

const SingleNav = ({ pageTitle, path, setIsMobileMenuOpen }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "text-gray-dark" : "text-gray-light"
            }
            to={path}
            onClick={() => setIsMobileMenuOpen(false)}
        >
            {pageTitle}
        </NavLink>
    );
};

const Navbar = () => {
    const dropdownRef = useRef(null);
    const { user, logOut } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("SignOut successful");

                toast.success("Logout Successful", {
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
            .catch((err) => console.error(err));
    };

    const navLinks = (
        <>
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="Home"
                path="/"
            />
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="About"
                path="/about"
            />
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="Career"
                path="/career"
            />
        </>
    );

    // handle outside clicks
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };
        if (isMobileMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="navbar pt-5">
            <div className="navbar-start">
                <div className="dropdown" ref={dropdownRef}>
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <nav
                        tabIndex={0}
                        className={`${
                            isMobileMenuOpen ? "flex" : "hidden"
                        }   flex-col gap-2 p-3 absolute mt-3 z-[1] shadow-2xl bg-base-100 rounded-box w-52`}
                    >
                        {navLinks}
                    </nav>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <nav className="flex gap-3 px-1 text-lg">{navLinks}</nav>
            </div>
            <div className="navbar-end gap-3">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                >
                    <div className="w-10 rounded-full">
                        <img
                            alt="User Image"
                            src={
                                user
                                    ? user.photoURL
                                        ? user.photoURL
                                        : userDefaultPicture
                                    : userDefaultPicture
                            }
                        />
                    </div>
                </div>
                {user ? (
                    <button
                        onClick={handleLogOut}
                        to="/login"
                        className="btn rounded-none bg-gray-dark hover:bg-gray-light text-base sm:text-xl px-5 py-1 sm:px-8 sm:py-2 text-white font-semibold"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="btn rounded-none bg-gray-dark hover:bg-gray-light text-base sm:text-xl px-5 py-1 sm:px-8 sm:py-2 text-white font-semibold"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

SingleNav.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    setIsMobileMenuOpen: PropTypes.func.isRequired,
};

export default Navbar;
