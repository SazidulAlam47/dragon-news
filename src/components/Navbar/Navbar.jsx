import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "/assets/user.png";

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                // Click happened outside the dropdown
                setIsMobileMenuOpen(false);
            }
        };

        // Bind the event listener when isMobileMenuOpen is true
        if (isMobileMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        // Unbind the event listener on cleanup
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMobileMenuOpen]); // Empty dependency array ensures that effect runs only once

    return (
        <div className="navbar bg-base-100 mb-16">
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
                            alt="Tailwind CSS Navbar component"
                            src={userDefaultPicture}
                        />
                    </div>
                </div>

                <Link
                    to="/login"
                    className="btn rounded-none bg-gray-dark hover:bg-gray-light text-base sm:text-xl px-5 py-1 sm:px-8 sm:py-2 text-white font-semibold"
                >
                    Login
                </Link>
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
