import React from "react";
import Navbar from "./Navbar";
import Mainvideo from "./Mainvideo";
import MainText from "./MainText";

const Landing = () => {
  return (
    <div className="w-full h-screen relative text-white">
      <Navbar/>
      <Mainvideo/>
      <MainText/>
    </div>
  );
};

export default Landing;
