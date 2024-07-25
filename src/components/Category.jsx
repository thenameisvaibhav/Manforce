import { motion } from "framer-motion";
import React from "react";

const Category = () => {
  return (
    <div className="w-full">
      <div className="cards h-fit w-full lg:flex overflow-hidden">
        <motion.div
          whileHover={{
            width: "80%",
            backgroundColor: "white",
            transition: { duration: 1, ease: [0.37, 0, 0.63, 1] },
          }}
          className="box1 h-1/2 lg:h-full w-full lg:w-1/2 border-[.1px] border-white hover:text-black overflow-hidden"
        >
          <h1 className="text-5xl lg:text-7xl text-center font-bold my-5 uppercase tracking-wide">
            Dotted
          </h1>
          <img
            className="h-96 w-full object-contain"
            src="./Images/dot1.png"
            alt=""
          />
        </motion.div>
        <motion.div
          whileHover={{
            width: "80%",
            backgroundColor: "white",
            transition: { duration: 1, ease: [0.37, 0, 0.63, 1] },
          }}
          className="box2 h-1/2 lg:h-full w-full lg:w-1/2 border-[.1px] border-white hover:text-black"
        >
          <h1 className="text-5xl lg:text-7xl text-center font-bold my-5 uppercase tracking-wide">
            Flavoured
          </h1>
          <img
            className="h-96 w-full object-contain"
            src="./Images/Product1.png"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Category;
