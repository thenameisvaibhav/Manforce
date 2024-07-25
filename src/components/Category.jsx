import React from "react";

const Category = () => {
  return (
    <div className="w-full">
      <div className="cards h-[150vh] w-full lg:flex">
        <div className="card1 h-1/2 lg:h-full w-full lg:w-1/2 hover:w-[80%] transition-all border-[.1px] border-white">
          <h1 className="text-5xl text-center font-bold my-5 uppercase tracking-wide">
            Dotted
          </h1>
          <img
            className="h-96 w-full object-contain"
            src="./Images/Product1.png"
            alt=""
          />
        </div>
        <div className="card2 h-1/2 lg:h-full w-full lg:w-1/2 hover:w-[80%] transition-all border-[.1px] border-white">
          <h1 className="text-5xl text-center font-bold my-5 uppercase tracking-wide">
            Flavoured
          </h1>
          <img
            className="h-96 w-full object-contain"
            src="./Images/Product1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
