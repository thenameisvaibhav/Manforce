import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { IoMenuSharp } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef();
  const menu = useRef();

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
      .to(menu.current, {
        right: 0,
        duration: 1,
        ease: "expo.inOut",
      })
  });

  return (
    <div
      className={`w-full fixed z-[999] transition-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 py-5 pr-8 sm:py-10 flex items-center justify-between text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.9 }}
          className="logo"
        >
          <img
            className="w-full h-full object-contain"
            src="https://www.manforcecondoms.com/img/mfc-white.svg"
            alt=""
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.9 }}
          className="flex items-center justify-center gap-2"
        >
          <p className="tracking-tight hidden lg:flex font-['Nuckle']">Menu</p>
          <IoMenuSharp
            onClick={() => tl.current.play()}
            className="w-10 h-10"
          />
          <div
            ref={menu}
            className="h-screen w-full lg:w-[50vw] absolute z-[1] top-0 -right-full bg-[#111] px-10 py-32 lg:rounded-l-2xl"
          >
            <FlipLink href="#">Products</FlipLink>
            <FlipLink href="#">About Us</FlipLink>
            <FlipLink href="#">How To Use?</FlipLink>
            <FlipLink href="#">Contact Us</FlipLink>
            <div className="email flex gap-1 items-center font-['Nuckle']">
              <p className="text-xl lg:text-3xl font-semibold">Email:</p>
              <a className="underline underline-offset-2 font-semibold lg:text-lg" href="#">
                contact@mankindpharma.com
              </a>
            </div>
            <div className="social flex items-center justify-between lg:justify-evenly mt-7">
              <FaFacebook className="h-8 w-8 cursor-pointer" />
              <FaXTwitter className="h-8 w-8 cursor-pointer" />
              <FaYoutube className="h-8 w-8 cursor-pointer" />
              <FaInstagram className="h-8 w-8 cursor-pointer" />
            </div>
            <img
              className="w-full h-fit lg:h-40 object-contain mt-5"
              src="https://www.manforcecondoms.com/img/mfc-white.svg"
              alt=""
            />
            <i
              onClick={() => tl.current.reverse()}
              className="ri-close-large-fill absolute top-6 lg:top-12 right-8 bg-white rounded-full px-3 lg:px-5 py-2 lg:py-4 font-bold text-xl cursor-pointer text-black"
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
      className="relative w-fit block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-7xl mb-8"
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
