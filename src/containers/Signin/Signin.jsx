import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import routes from "../../routes/routeDefinitions";
import { ReactComponent as Image } from "../../assets/images/Signin/login.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const Signin = () => {
  // used to hold form input data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSigninHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // animation variants
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
    exit: {
      x: "100vw",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="grid md:grid-cols-2 items-center justify-center md:h-screen"
      variants={animation}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <form className="w-full md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto bg-white md:shadow-xl md:p-10 rounded-2xl mb-10 order-2 md:order-1">
        <div className="flex flex-col items-center">
          <h4 className="text-4xl font-bold">Welcome</h4>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg tracking-wider mb-5">
            Login to your account
          </p>

          <div className="relative w-full md:w-11/12 lg:w-4/5 mb-3">
            <FontAwesomeIcon
              className="absolute top-2 left-3 text-gray-300"
              icon={faUser}
            />
            <input
              className="bg-white w-full shadow-lg pl-10 pr-2 py-1 rounded-2xl border border-gray-200"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChangeHandler}
            />
          </div>

          <div className="relative w-full md:w-11/12 lg:w-4/5 mb-3">
            <FontAwesomeIcon
              className="absolute top-2 left-3 text-gray-300"
              icon={faLock}
            />
            <input
              className="bg-white w-full shadow-lg pl-10 pr-2 py-1 rounded-2xl border border-gray-200"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={onChangeHandler}
            />

            <Link
              className="text-sm text-black absolute right-0 -bottom-5"
              to="/#"
            >
              Forgot password?
            </Link>
          </div>

          <button
            onClick={onSigninHandler}
            className="my-6 bg-blue-500 text-white font-semibold md:font-normal md:text-lg flex justify-center items-center w-full md:w-11/12 lg:w-4/5 py-1 rounded-2xl"
          >
            Sign In
          </button>

          <div>
            <p className="text-center text-sm">Or continue with:</p>
            <div className="flex items-center mt-2 mb-4">
              <button className="flex items-center bg-blue-500 text-white md:text-lg px-3 py-1 mr-5 rounded-lg">
                <FontAwesomeIcon className="mr-2" icon={faFacebookF} />
                Facebook
              </button>

              <button className="flex items-center bg-red-500 text-white md:text-lg px-3 py-1 mr-5 rounded-lg">
                <FontAwesomeIcon className="mr-2" icon={faGoogle} />
                Google
              </button>
            </div>
          </div>

          <p className="text-sm">
            Don't have an account?{" "}
            <Link className="text-blue-500" to={routes.signup.path}>
              Sign Up
            </Link>
          </p>
        </div>
      </form>

      {/* the illustration */}
      <div className="flex justify-center order-1 md:order-2">
        <Image className="w-3/5 md:w-4/5 lg:w-3/4 xl:w-2/3 h-48 md:h-96 xl:h-80 mt-16 md:mt-0" />
      </div>
    </motion.div>
  );
};

export default Signin;
