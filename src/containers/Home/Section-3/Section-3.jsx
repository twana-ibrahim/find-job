import { Link } from "react-router-dom";
import routes from "../../../routes/routeDefinitions";
import secondPic from "../../../assets/images/Home/second-pic.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Section = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
      });
    } else {
      animation.start({
        opacity: 0,
      });
    }
  }, [animation, inView]);

  return (
    <div className="justify-center relative items-center bg-blue-50 pt-8 pb-32 sm:px-14 lg:px-20 xl:px-60">
      <div
        ref={ref}
        className="mx-auto flex flex-col items-center md:grid md:grid-cols-3 xl:grid-cols-2 bg-blue-100 bg-opacity-50 transform sm:-skew-x-6 lg:-skew-x-12 py-5 xl:py-10"
      >
        <div className="md:order-2 transform sm:skew-x-6 lg:skew-x-12 col-span-2 xl:col-span-1 px-4 xl:px-0">
          <h4 className="px-10 md:px-0 xl:pr-24 text-2xl md:text-3xl lg:text-4xl font-bold">
            Create an account and find your job
          </h4>
          <p className="text-sm lg:text-base px-10 md:px-0 md:pr-2 lg:pr-10 xl:pr-20 mt-5 leading-7 lg:leading-9 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint
            rem dolore nam, et expedita, qui fugiat totam quos aliquam omnis
            error. Unde nesciunt blanditiis, quibusdam asperiores minima
            consequatur voluptates?
          </p>
          <div className="flex justify-center mx-auto w-3/5 sm:w-2/5 md:w-auto md:inline-flex mt-5 px-7 lg:px-10 py-2 transform sm:-skew-x-6 lg:-skew-x-12 bg-blue-500 text-white rounded-md">
            <Link to={routes.signup.path}>
              <div className="transform sm:skew-x-6 lg:skew-x-12">
                Create Account
              </div>
            </Link>
          </div>
        </div>
        <div
          ref={ref}
          className="md:order-1 w-6/12 transform sm:skew-x-6 lg:skew-x-12 relative"
        >
          <img className="md:hidden mt-10 -mb-5" src={secondPic} alt="Man" />
          <motion.div
            className="md:hidden absolute right-0 top-14 w-4 h-4 bg-purple-500 bg-opacity-70 rounded-full"
            initial={{ opacity: 0 }}
            animate={animation}
            transition={{ delay: 1.5, duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="md:hidden absolute left-0 top-32 w-6 h-6 bg-red-500 bg-opacity-70 rounded-full"
            initial={{ opacity: 0 }}
            animate={animation}
            transition={{ delay: 2, duration: 0.3 }}
          ></motion.div>
        </div>
      </div>

      <img
        className="w-1/3 lg:w-1/4 xl:w-1/5 hidden md:block absolute left-5 lg:left-20 xl:left-60 -top-9 lg:top-0 xl:-top-8"
        src={secondPic}
        alt="Man"
      />
      <motion.div
        className="hidden md:block absolute md:left-60 lg:left-72 xl:left-1/3 top-10 w-4 h-4 bg-purple-500 bg-opacity-70 rounded-full"
        initial={{ opacity: 0 }}
        animate={animation}
        transition={{ delay: 1.5, duration: 0.3 }}
      ></motion.div>
      <motion.div
        className="hidden md:block absolute left-10 lg:left-20 xl:left-40 top-24 w-6 h-6 bg-red-500 bg-opacity-70 rounded-full"
        initial={{ opacity: 0 }}
        animate={animation}
        transition={{ delay: 2, duration: 0.3 }}
      ></motion.div>
    </div>
  );
};

export default Section;
