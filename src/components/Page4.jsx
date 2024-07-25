import { motion, useAnimation } from "framer-motion";
import React from "react";

const Page4 = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full">
      <div className="cards lg:flex items-center justify-center w-full h-full gap-10 lg:mt-10">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          whileHover={{
            scale: .90,
            transition: { duration: 0.5 },
            opacity: 1,
          }}
          className="card1 w-full lg:w-[40vw] h-96 lg:h-[60vh] lg:rounded-3xl relative"
        >
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden text-[#111] text-5xl font-semibold font-['Neue_Montreal']">
            {"Experts".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.87, 0, 0.13, 1], delay: index * 0.05 }}
                className="lg:inline-block uppercase"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className="h-full w-full object-cover"
            src="./Images/doc.avif"
            alt=""
          />
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.4 },
            opacity: 1,
          }}
          className="card2 w-full lg:w-[40vw] h-96 lg:h-[60vh] lg:rounded-3xl relative"
        >
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden text-[#111] text-7xl lg:text-5xl font-semibold font-['Neue_Montreal'] ">
            {"Blogs".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.87, 0, 0.13, 1], delay: index * 0.05 }}
                className="lg:inline-block uppercase"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className="h-full w-full object-cover"
            src="./Images/new.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page4;
