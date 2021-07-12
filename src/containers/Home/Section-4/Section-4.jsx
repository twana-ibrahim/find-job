import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Section = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
          delay: 1,
        },
      });
    } else {
      animation.start({
        opacity: 0,
      });
    }
  }, [animation, inView]);

  return (
    <div className="bg-blue-50 pt-8 pb-32 px-6 sm:px-20 md:px-4 lg:px-6 xl:px-32">
      <div className="grid md:grid-cols-2 justify-center">
        <div className="px-2 lg:px-5 xl:px-10">
          <h4 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
            Finding a job never been so easy before
          </h4>
          <p className="text-sm lg:text-base leading-8 pr-4 lg:pr-8 xl:pr-16 my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            cum temporibus omnis numquam accusamus?
          </p>

          <h6 className="text-xl lg:text-2xl xl:text-3xl font-bold xl:font-semibold my-3">
            Upload your CV
          </h6>
          <p className="text-sm lg:text-base pr-4 lg:pr-10 xl:pr-28 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            culpa ullam minima quibusdam placeat nobis?
          </p>

          <h6 className="text-xl lg:text-2xl xl:text-3xl font-bold xl:font-semibold my-3">
            Scheduling Interview
          </h6>
          <p className="text-sm lg:text-base pr-4 lg:pr-10 xl:pr-28 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            culpa ullam minima quibusdam placeat nobis?
          </p>
        </div>

        <div ref={ref} className="relative mt-20 md:mt-0">
          <div className="bg-white flex flex-col mx-auto text-center w-3/4 lg:w-3/5 xl:w-1/2 py-10 rounded-xl">
            <h6 className="text-xl xl:text-2xl font-bold">Upload CV</h6>
            <p className="text-sm lg:text-base mt-2">
              File must be .doc or .pdf{" "}
            </p>

            <div className="flex flex-col justify-center items-center py-16 w-3/4 mx-auto mt-8 rounded-lg bg-gray-50">
              <FontAwesomeIcon
                className="text-yellow-400 text-4xl"
                icon={faFolderOpen}
              />
              <p className="text-xs lg:text-sm text-gray-500 mt-3">
                Drag and Drop or Upload
              </p>
            </div>

            <button className="w-3/4 mx-auto text-base lg:text-xl py-3 bg-green-500 text-white rounded-lg">
              Upload File
            </button>
          </div>

          <motion.div
            className="grid grid-cols-4 items-center absolute bottom-20 md:bottom-40 lg:bottom-20 right-0 sm:-right-16 md:-right-2 xl:-right-12 w-3/5 lg:w-1/2 bg-white p-2 rounded-lg"
            animate={animation}
          >
            <div className="flex justify-center items-center h-full py-4 mr-2 rounded-lg bg-yellow-100">
              <FontAwesomeIcon
                className="text-base lg:text-xl xl:text-2xl text-yellow-600"
                icon={faClock}
              />
            </div>

            <div className="col-span-3">
              <h6 className="text-xs lg:text-sm xl:text-base font-bold">
                Interview Scheduled
              </h6>
              <p className="text-xs xl:text-sm font-light lg:font-normal text-gray-500">
                20 th August, 2021
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section;
