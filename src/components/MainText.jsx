import { motion } from 'framer-motion';
import React from 'react'

const MainText = () => {
  return (
    <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      {["Make", "Every", "Moment", "Count"].map((item, index) => {
        return (
          <h1
            key={index}
            className="text-7xl font-black tracking-tight leading-none overflow-hidden font-['Nuckle'] mt-3"
          >
            <motion.span
              initial={{ rotate: 90, y: "100%", opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                ease: [0.85, 0, 0.15, 1],
                duration: 1,
                delay: index * 0.3,
              }}
              className="inline-block origin-left"
            >
              {item}
            </motion.span>
          </h1>
        );
      })}
    </div>
  );
}

export default MainText