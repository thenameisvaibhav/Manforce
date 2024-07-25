import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  let texts = [
    [
      "Do",
      "bacche",
      "meethi",
      "kheer",
      "usse",
      "jyada",
      "bawasir",
      "Do",
      "bacche",
      "meethi",
      "kheer",
      "usse",
      "jyada",
      "bawasir",
    ],
  ];
  return (
    <div
      className="py-5 lg:py-20 w-full relative overflow-hidden text-white"
    >
      {texts.map((item, index) => (
        <Marquee key={index} maintexts={item} />
      ))}
    </div>
  );
};

export default Marquees;
