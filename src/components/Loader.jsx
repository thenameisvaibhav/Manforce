import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import React from "react";

const Loader = () => {
  useGSAP(() => {
    gsap.to(".loader", {
      y: "-100%",
      duration: 1,
      delay: 2.5,
      display: "none",
      ease: "Power4.out"
    });
  });
  return (
    <div className="loader w-full h-screen fixed top-0 bg-[#111] z-[9999] flex items-center justify-center text-[#F1F1F1] font-['Nuckle']">
      <div className="headings">
        {["Unleash", "Your", "Desires"].map((item, index) => {
          return (
            <h1
              key={index}
              className="text-7xl lg:text-[11rem] font-semibold tracking-tight leading-none overflow-hidden"
            >
              <motion.span
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.85, 0, 0.15, 1],
                  duration: 1.3,
                  delay: index * 0.5,
                }}
                className="inline-block origin-left"
              >
                {item}
              </motion.span>
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Loader;
