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
        markers: true,
        start: "top 0",
        end: "+=3000",
        scrub: 0.3,
      }
    });

    gsap.to(".centertext",{
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true
    })
    
  })
  return (
    <div className="hscroll w-full">
      <div className="hcontainer relative w-full h-[400vh]">
        <div className="slides h-screen overflow-hidden flex whitespace-nowrap sticky top-0">
          <div className="slide w-full relative h-screen flex-shrink-0 bg-orange-500 ">
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-3xl">HELEOOO</h1>
            </div>
            <img className="absolute" src="" alt="" />
          </div>
          <div className="slide w-full relative h-screen flex-shrink-0 bg-yellow-500 ">
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-3xl">HELEOOO</h1>
            </div>
            <img className="absolute" src="" alt="" />
          </div>
          <div className="slide w-full relative h-screen flex-shrink-0 bg-green-500 ">
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-3xl">HELEOOO</h1>
            </div>
            <img className="absolute" src="" alt="" />
          </div>
          <div className="slide w-full relative h-screen flex-shrink-0 bg-blue-500 ">
            <div className="centertext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-3xl">HELEOOO</h1>
            </div>
            <img className="absolute" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products