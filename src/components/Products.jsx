import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'

const Products = () => {
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger); 
    gsap.to(".slide", {
      transform: "translate(-300%)",
      duration: 2,
      scrollTrigger:{
        trigger:".slide",
        markers: false,
        start: "top 0",
        end: "+=3000",
        scrub: 0.3,
      }
    });
    
  })
  return (
    <div className="hscroll w-full font-['Nuckle']">
      <div className="hcontainer relative w-full h-[400vh]">
        <div className="slides h-screen overflow-hidden flex whitespace-nowrap sticky top-0">
          <div className="slide w-full relative h-screen flex-shrink-0 bg-[#FEEA63] ">
            <h1 className="relative text-5xl lg:text-[12rem] font-black uppercase tracking-tighter text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#e1cc3f]">
              Pineapple
            </h1>
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                className="w-fit h-fit object-cover drop-shadow-[-10px_10px_0.1px_rgba(0,0,0,0.24)]"
                src="./Images/pine.png"
                alt=""
              />
            </div>
          </div>
          <div className="slide w-full relative h-screen flex-shrink-0 bg-[#FF4042] ">
            <h1 className="relative text-5xl lg:text-[12rem] font-black uppercase tracking-tighter text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ce3235]">
              strawberry
            </h1>
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                className="w-fit h-fit object-cover drop-shadow-[-10px_10px_0.1px_rgba(0,0,0,0.24)]"
                src="./Images/straw.png"
                alt=""
              />
            </div>
          </div>
          <div className="slide w-full relative h-screen flex-shrink-0 bg-[#BC8D89] ">
            <h1 className="relative text-5xl lg:text-[12rem] font-black uppercase tracking-tighter text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 text-[#96706d]">
              chocolate
            </h1>
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                className="w-fit h-fit object-cover drop-shadow-[-10px_10px_0.1px_rgba(0,0,0,0.24)]"
                src="./Images/choc.png"
                alt=""
              />
            </div>
          </div>
          <div className="slide w-full relative h-screen flex-shrink-0 bg-[#d86f8d] ">
            <h1 className="relative text-5xl lg:text-[12rem] font-black uppercase tracking-tighter text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ae5a72]">
              Bubble Gum
            </h1>
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                className="w-fit h-fit object-cover drop-shadow-[-10px_10px_0.1px_rgba(0,0,0,0.24)]"
                src="./Images/gum.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products