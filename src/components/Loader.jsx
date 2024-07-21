import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const Loader = () => {
    useGSAP(()=>{
      const tl = gsap.timeline()

      tl.from(".text", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      });

      tl.to(".text", {
        opacity: 0,
        x: -10,
        duration: 1,
        stagger: 0.1,
      });

      tl.to(".loader", {
        y: "-100%"
      });

      tl.to(".loader",{
        display: "none"
      })
    })
  return (
    <div className="loader w-full h-screen fixed top-0 bg-red-500 z-[99] flex items-center justify-center text-white gap-5">
      <h3 className="text">Tomorrow's</h3>
      <h3 className="text">Brand,</h3>
      <h3 className="text">Today.™️</h3>
    </div>
  );
}

export default Loader