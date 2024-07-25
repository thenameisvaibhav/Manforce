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
          <div className="slide w-full relative h-screen flex-shrink-0 bg-orange-500 ">
            <h1 className="relative text-7xl font-bold uppercase tracking-tighter text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">
              Cocktail
            </h1>
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                className="w-fit h-fit object-cover drop-shadow-[-10px_10px_0.1px_rgba(0,0,0,0.24)]"
                src="./Images/Product1.png"
                alt=""
              />
            </div>
          </div>
          <div className="slide w-full relative h-screen flex-shrink-0 bg-orange-500 ">
            <h1 className="relative text-7xl font-bold uppercase tracking-tighter text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">
              Cocktail
            </h1>
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                className="w-fit h-fit object-cover drop-shadow-[-10px_10px_0.1px_rgba(0,0,0,0.24)]"
                src="./Images/Product1.png"
                alt=""
              />
            </div>
          </div>
          <div className="slide w-full relative h-screen flex-shrink-0 bg-orange-500 ">
            <h1 className="relative text-7xl font-bold uppercase tracking-tighter text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">
              Cocktail
            </h1>
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                className="w-fit h-fit object-cover drop-shadow-[-10px_10px_0.1px_rgba(0,0,0,0.24)]"
                src="./Images/Product1.png"
                alt=""
              />
            </div>
          </div>
          <div className="slide w-full relative h-screen flex-shrink-0 bg-orange-500 ">
            <h1 className="relative text-7xl font-bold uppercase tracking-tighter text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">
              Cocktail
            </h1>
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                className="w-fit h-fit object-cover drop-shadow-[-10px_10px_0.1px_rgba(0,0,0,0.24)]"
                src="./Images/Product1.png"
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