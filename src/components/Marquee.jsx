import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ maintexts }) => {
  return (
    <div className="flex w-full overflow-hidden text-white">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex flex-shrink-0 py-5 gap-5 pl-5 uppercase text-7xl font-bold lg:font-black"
      >
        {maintexts.map((text, index) => (
          <span
            className="marque lg:text-transparent hover:text-white"
            key={index}
          >
            {text}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex flex-shrink-0 py-5 gap-5 pl-5 uppercase text-7xl font-bold lg:font-black"
      >
        {maintexts.map((text, index) => (
          <span
            className="marque lg:text-transparent hover:text-white"
            key={index}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
