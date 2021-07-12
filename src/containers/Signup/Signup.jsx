import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLock, faPhoneAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import routes from "../../routes/routeDefinitions";
import { ReactComponent as Image } from "../../assets/images/Signup/signup.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
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
      className="grid md:grid-cols-2 items-center justify-center h-screen"
      variants={animation}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="hidden md:flex justify-center">
        <Image className="w-4/5 lg:w-3/4 xl:w-2/3 h-96 xl:h-80" />
      </div>

      <form className="md:w-11/12 lg:w-4/5 xl:w-3/5 mx-auto bg-white shadow-xl p-10 rounded-2xl">
        <div className="flex flex-col items-center">
          <h4 className="text-4xl font-bold">Let's Get Start</h4>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg tracking-wider mb-5">
            Create your account
          </p>

          <div className="relative w-11/12 lg:w-4/5 mb-3">
            <input
              className="text-center bg-white w-1/2 shadow-lg px-2 py-1 rounded-2xl border border-gray-200"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              onChange={onChangeHandler}
            />
            <input
              className="text-center bg-white w-1/2 shadow-lg px-2 py-1 rounded-2xl border border-gray-200"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              onChange={onChangeHandler}
            />
          </div>

          <div className="relative w-11/12 lg:w-4/5 mb-3">
            <FontAwesomeIcon
              className="absolute top-2 left-3 text-gray-300"
              icon={faUser}
            />
            <input
              className="bg-white w-full shadow-lg pl-10 pr-2 py-1 rounded-2xl border border-gray-200"
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail"
              onChange={onChangeHandler}
            />
          </div>

          <div className="relative w-11/12 lg:w-4/5 mb-3">
            <FontAwesomeIcon
              className="absolute top-2 left-3 text-gray-300"
              icon={faPhoneAlt}
            />
            <input
              className="bg-white w-full shadow-lg pl-10 pr-2 py-1 rounded-2xl border border-gray-200"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              onChange={onChangeHandler}
            />
          </div>

          <div className="relative w-11/12 lg:w-4/5 mb-3">
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
          </div>
          <div className="relative w-11/12 lg:w-4/5 mb-3">
            <FontAwesomeIcon
              className="absolute top-2 left-3 text-gray-300"
              icon={faLock}
            />
            <input
              className="bg-white w-full shadow-lg pl-10 pr-2 py-1 rounded-2xl border border-gray-200"
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm Password"
              onChange={onChangeHandler}
            />
          </div>

          <button
            onClick={onSigninHandler}
            className="my-6 bg-blue-500 text-white font-semibold md:font-normal md:text-lg flex justify-center items-center w-11/12 lg:w-4/5 py-1 rounded-2xl"
          >
            Sign Up
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
            Do you have an account?{" "}
            <Link className="text-blue-500" to={routes.signin.path}>
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default Signup;
