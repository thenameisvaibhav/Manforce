import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Page5 = () => {
  const parent = useRef();
  const videodiv = useRef();
  const lets = useRef();
  const play = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(
      videodiv.current,
      {
        width: "100%",
        height: "100%",
        ease: "power4.inOut",
      },
      "a"
    )
      .to(
        lets.current,
        {
          x: "40%",
          scale: .9,
          ease: "power4.inOut",
        },
        "a"
      )
      .to(
        play.current,
        {
          x: "-40%",
          scale: .9,
          ease: "power4.inOut",
        },
        "a"
      );
  });
  return (
    <div
      ref={parent}
      className="w-full h-screen overflow-hidden relative bg-black font-['Nuckle']"
    >
      <div
        ref={videodiv}
        className="w-52 sm:w-80  aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:aspect-square"
          src="./Videos/scene.mp4"
        ></video>
      </div>
      <div className="overlay absolute w-full h-full text-white flex flex-col justify-between p-20">
        <div className="w-full flex items-center justify-center gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="text-sm up">Safe Sex</h3>
        </div>
        <h1 className="w-full flex justify-center items-center gap-28 sm:gap-96 font-['Nuckle']">
          <div ref={lets} className="text-6xl sm:text-8xl font-light">
            Let's
          </div>
          <div ref={play} className="text-6xl sm:text-8xl font-light">
            Play
          </div>
        </h1>
        <p className="text-center text-[1.6vh]">
          Enhancing intimacy and pleasure for couples having long-lasting sex.
        </p>
      </div>
    </div>
  );
};

export default Page5;
