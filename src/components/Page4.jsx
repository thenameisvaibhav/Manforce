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
      <div className="cards lg:flex items-center justify-center w-full h-full gap-10">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card1 bg-red-500 w-full lg:w-[40vw] h-96 lg:h-[60vh] hover:scale-95 rounded-3xl relative"
        >
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            {"HELLO".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.87, 0, 0.13, 1], delay: index * 0.05 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="card2 bg-blue-500 w-full lg:w-[40vw] h-96 lg:h-[60vh] hover:scale-95 rounded-3xl relative"
        >
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            {"HELLO".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.87, 0, 0.13, 1], delay: index * 0.05 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Page4;
