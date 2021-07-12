import { motion } from "framer-motion";
import SectionOne from "./Section-1/Section-1";
import SectionTwo from "./Section-2/Section-2";
import SectionThree from "./Section-3/Section-3";
import SectionFour from "./Section-4/Section-4";

const Home = () => {
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
      variants={animation}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />
    </motion.div>
  );
};

export default Home;
