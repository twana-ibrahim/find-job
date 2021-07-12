import {
  faBoxOpen,
  faBullseye,
  faCamera,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Section = () => {
  const { ref, inView } = useInView();
  const boxAnimation = useAnimation();

  const boxes = [
    {
      title: "UI/UX Design",
      paragraph: "Lorem ipsum dolor sit amet.",
      icon: faBoxOpen,
      bgColor: " bg-blue-100 ",
      textColor: " text-blue-500 ",
    },
    {
      title: "Programing",
      paragraph: "Lorem ipsum dolor sit amet.",
      icon: faCode,
      bgColor: " bg-yellow-100 ",
      textColor: " text-yellow-500 ",
    },
    {
      title: "Marketing",
      paragraph: "Lorem ipsum dolor sit amet.",
      icon: faBullseye,
      bgColor: " bg-purple-100 ",
      textColor: " text-purple-500 ",
    },
    {
      title: "Photography",
      paragraph: "Lorem ipsum dolor sit amet.",
      icon: faCamera,
      bgColor: " bg-red-100 ",
      textColor: " text-red-500 ",
    },
  ];

  useEffect(() => {
    if (inView) {
      boxAnimation.start((i) => ({
        y: 0,
        transition: {
          duration: 1.25,
          ease: "easeInOut",
          delay: i * 0.25,
          type: "spring",
          stiffness: 120,
        },
      }));
    } else {
      boxAnimation.start({
        y: "100px",
        skew: "-6deg",
      });
    }
  }, [boxAnimation, inView]);

  return (
    <motion.div className="grid justify-center items-center bg-blue-50 pt-32 md:pt-8 pb-32 lg:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-2/3 m-auto mb-20">
        High demand jobs categories fratured
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-4 gap-x-48 sm:gap-x-20 md:gap-x-14 lg:gap-x-10 overflow-x-auto lg:overflow-x-visible scrollbar min-w-full"
      >
        {boxes.map((box, index) => (
          <motion.div
            className="bg-white px-2 py-5 sm:py-10 flex flex-col items-center justify-center sm:justify-around transform -skew-x-6 rounded-xl min-w-max"
            animate={boxAnimation}
            custom={index}
            key={index}
          >
            <div className={`px-4 py-4 sm:py-6 ${box.bgColor} mb-8`}>
              <FontAwesomeIcon
                className={`text-xl md:text-2xl ${box.textColor} transform skew-x-6`}
                icon={box.icon}
              />
            </div>
            <h4 className="sm:text-xl md:text-2xl font-bold transform skew-x-6 mb-3">
              {box.title}
            </h4>
            <p className="font-light sm:font-normal text-xs md:text-sm text-gray-500 transform skew-x-6">
              {box.paragraph}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Section;
