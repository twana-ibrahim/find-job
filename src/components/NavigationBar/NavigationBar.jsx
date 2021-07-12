import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import routes from "../../routes/routeDefinitions";
import { motion } from "framer-motion";

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useLocation();
  const [prevPath, setPrevPath] = useState(pathname);

  const onNavClickHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (pathname !== prevPath) {
      setIsNavOpen(false);
      setPrevPath(pathname);
    }
  }, [pathname, prevPath]);

  const animation = {
    initial: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {isNavOpen && (
        <div
          onClick={onNavClickHandler}
          className="flex fixed top-0 z-10 h-screen w-full bg-transparent"
        ></div>
      )}
      <motion.div
        className="flex justify-between md:justify-around items-center py-1 px-4 md:px-0 bg-transparent absolute z-10 top-2 w-full"
        variants={animation}
        initial="initial"
        animate="visible"
      >
        <Link
          to={routes.home.path}
          className="text-2xl font-bold tracking-wide lg:tracking-widest"
        >
          LOGO
        </Link>

        <div
          onClick={onNavClickHandler}
          className="flex md:hidden items-center justify-center text-lg bg-blue-500 text-white w-8 h-8 rounded-full transform transition hover:scale-125 duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
        </div>

        <ul
          className={`${
            isNavOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-4 opacity-0 md:translate-x-0 md:opacity-100"
          } flex flex-col md:flex-row transform transition-all duration-500 absolute z-20 top-14 shadow-lg md:shadow-none bg-blue-100 md:bg-transparent rounded-lg md:rounded-none px-4 md:px-0 py-2 md:py-0 space-y-3 md:space-y-0 right-4 md:top-0 md:right-0 md:static md:space-x-8 lg:space-x-14 text-base lg:text-lg font-semibold text-gray-700`}
        >
          <NavLink
            exact
            to={routes.home.path}
            className="transform hover:scale-125 transition duration-300 ease-in-out"
            activeClassName="border-b md:border border-gray-400 pb-1 md:pb-0 md:px-1 transform md:scale-125"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/#"
            className="transform hover:scale-125 transition duration-300 ease-in-out"
          >
            Post a Job
          </NavLink>
          <NavLink
            exact
            to="/#"
            className="transform hover:scale-125 transition duration-300 ease-in-out"
          >
            Feature
          </NavLink>
          <NavLink
            exact
            to="/#"
            className="transform hover:scale-125 transition duration-300 ease-in-out"
          >
            About Us
          </NavLink>

          <NavLink
            exact
            to={routes.signin.path}
            className="md:hidden transform hover:scale-125 transition duration-300 ease-in-out"
            activeClassName="border-b pb-1"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to={routes.signup.path}
            className="md:hidden transform hover:scale-125 transition duration-300 ease-in-out"
            activeClassName="border-b pb-1"
          >
            Sign Up
          </NavLink>
        </ul>

        <div className="hidden md:flex text-sm lg:text-base shadow-lg transform -skew-x-30 rounded-md">
          <NavLink
            to={routes.signin.path}
            className="px-3 lg:px-4 py-1 lg:py-2 transform skew-x-30 hover:scale-125 transition duration-300 ease-in-out"
          >
            Sign In
          </NavLink>
          <NavLink
            to={routes.signup.path}
            className="px-3 lg:px-4 py-1 lg:py-2 bg-blue-500 text-white rounded-md"
          >
            <div className="transform skew-x-30 hover:scale-125 transition duration-300 ease-in-out">
              Sign Up
            </div>
          </NavLink>
        </div>
      </motion.div>
    </>
  );
};

export default NavigationBar;
