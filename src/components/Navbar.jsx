import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { IoMenuSharp } from "react-icons/io5";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tl = useRef(gsap.timeline({ paused: true }));

  useGSAP(() => {
    tl.current
      .to(".full", {
        right: 0,
        duration: 1.5,
        ease: "sine.inOut",
      })
  });

  return (
    <div
      className={`w-full fixed z-[999] transition-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 py-5 sm:py-10 flex items-center justify-between text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.9 }}
          className="logo"
        >
          <img
            className="w-full h-full object-cover"
            src="https://www.manforcecondoms.com/img/mfc-white.svg"
            alt=""
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.9 }}
          className="flex items-center justify-center gap-2 "
        >
          <p className="tracking-tight hidden lg:flex">Menu</p>
          <IoMenuSharp
            onClick={() => tl.current.play()}
            className="w-10 h-10"
          />
          <div className="menu full h-screen w-full lg:w-[35vw] absolute z-[1] top-0 -right-full bg-zinc-900 px-10 py-36 backdrop-blur lg:rounded-l-2xl">
            <FlipLink href="#">Products</FlipLink>
            <FlipLink href="#">About Us</FlipLink>
            <FlipLink href="#">How To Use?</FlipLink>
            <FlipLink href="#">Contact Us</FlipLink>
            <i
              onClick={() => tl.current.reverse()}
              className="ri-close-large-fill absolute top-12 right-6 md:right-20 bg-white rounded-full px-5 py-4 font-bold text-xl cursor-pointer text-black"
            ></i>
          </div>
        </motion.span>
      </div>
    </div>
  );
};

export default Navbar;

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative w-fit block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-7xl mb-14"
      style={{
        lineHeight: 0.95,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
