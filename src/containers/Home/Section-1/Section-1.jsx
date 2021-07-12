import {
  faSearch,
  faStar as fullStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faStar as emptyStar,
} from "@fortawesome/free-regular-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import firstImage from "../../../assets/images/Home/first-pic.png";
import profilePic from "../../../assets/images/Home/portraite-pic.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Section = () => {
  // used to display rating stars
  const rates = [true, true, true, true, false];

  // used to animate icons near the man
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
    <div className="grid md:grid-cols-2 items-center md:h-screen bg-blue-50 pt-12 -mt-5 px-5 sm:px-12 md:pl-5 md:pr-10 lg:px-10 xl:px-20">
      <div className="lg:px-10 xl:px-4 mt-20 md:mt-0 flex flex-col items-center md:items-start">
        <p className="mb-3 xl:mb-5 text-sm xl:text-base px-7 sm:px-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, esse?
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold px-7 sm:px-0 pr-6 xl:pr-10 mb-7 xl:mb-10">
          Your dream job is waiting here
        </h2>
        <p className="leading-6 xl:leading-8 px-7 sm:px-14 md:px-0 md:pr-18 xl:pr-20 text-sm xl:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          laboriosam id rerum ratione repudiandae fuga tempore veniam iste
          laborum est.
        </p>

        <div className="bg-white inline-block px-1 sm:px-3 transform -skew-x-12 lg:-skew-x-30 mt-10 md:mt-16 xl:mt-20 rounded-md relative z-10">
          <FontAwesomeIcon
            className="transform skew-x-12 lg:skew-x-30 lg:text-lg xl:text-xl mr-1"
            icon={faSearch}
          />
          <input
            type="text"
            name="search"
            placeholder="Search your job"
            className="py-2 sm:py-3 xl:py-4 px-2 mr-1 bg-transparent transform skew-x-12 lg:skew-x-30"
          />
          <button className="bg-blue-500 text-white ml-2 py-1 xl:py-2 px-2 lg:px-4 rounded-md">
            <div className="text-sm sm:text-base transform skew-x-12 lg:skew-x-30">
              Get Started
            </div>
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="relative bg-gradient-to-l overflow-x-hidden mx-auto mt-20 md:mt-0 w-5/6 sm:w-11/12 xl:w-3/4 from-blue-100 to-blue-50 transform -skew-x-12 xl:-skew-x-30"
      >
        <img
          className="w-full xl:w-10/12 transform skew-x-12 xl:skew-x-30"
          src={firstImage}
          alt="Man"
        />

        {/* clock icon */}
        <motion.div
          className="absolute top-12 lg:top-32 left-5 transform skew-x-12 xl:skew-x-30 bg-red-500 p-3 rounded-lg text-white"
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ delay: 1, duration: 0.2 }}
        >
          <FontAwesomeIcon className="text-xl" icon={faClock} />
        </motion.div>

        {/* Google Icon */}
        <motion.div
          className="absolute top-40 sm:top-64 md:top-40 lg:top-52 xl:top-60 right-10 sm:right-14 md:right-5 lg:right-10 xl:right-32 transform skew-x-12 xl:skew-x-30 bg-white p-3 rounded-lg text-red-500"
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ delay: 1.5, duration: 0.2 }}
        >
          <FontAwesomeIcon className="text-2xl" icon={faGoogle} />
        </motion.div>

        {/* Profile */}
        <motion.div
          className="grid grid-cols-4 items-center absolute bottom-0 lg:bottom-2 xl:bottom-6 left-8 lg:left-3 xl:left-6 transform skew-x-12 xl:skew-x-30 w-3/4 lg:w-3/5 bg-white p-1 lg:p-3 rounded-lg"
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ delay: 2, duration: 0.2 }}
        >
          <img
            className="rounded-full sm:w-4/5 md:w-auto xl:w-2/3"
            src={profilePic}
            alt="Profile"
          />
          <div className="col-span-3 ml-2 xl:ml-0">
            <h6 className="font-bold sm:text-xl md:text-base lg:text-lg">
              John Cliventon
            </h6>
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-gray-500">
              Product Designer
            </p>
            {rates.map((rate, index) => (
              <FontAwesomeIcon
                className="text-xs sm:text-sm lg:text-base text-yellow-500"
                key={index}
                icon={rate ? fullStar : emptyStar}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
