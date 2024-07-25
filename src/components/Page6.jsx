import React from 'react'

const Page6 = () => {
  return (
    <div className="w-full font-['Nuckle'] bg-[#F1F1F1]">
      <div className="flex items-center justify-center">
        <video
          className="w-full h-96 lg:h-[70vh] object-cover object-center"
          autoPlay
          muted
          loop
          src="./Videos/cony.mp4"
        ></video>
        <div className="absolute text-black">
          <h1 className="text-center text-5xl lg:text-9xl font-semibold">
            52,00,00,000
          </h1>
          <h1 className="text-center text-xs lg:text-sm mt-5">
            Manforce condoms sold in FY2023
          </h1>
        </div>
      </div>

      <div className="w-full py-5 lg:py-10">
        <h1 className="text-center text-4xl font-semibold tracking-tighter text-black py-5 lg:py-10">
          Avaibable ON
        </h1>
        <div className="images lg:hidden">
          <div className="flex lg">
            <img
              className="w-full h-20 object-contain"
              src="./Images/flipkart.png"
              alt=""
            />
            <img
              className="w-full h-20 object-contain"
              src="./Images/amzonlogo.png"
              alt=""
            />
          </div>
          <div className="flex">
            <img
              className="w-full h-20 object-contain"
              src="./Images/pharmaeasy.png"
              alt=""
            />
            <img
              className="w-full h-20 object-contain"
              src="./Images/blinkit.png"
              alt=""
            />
          </div>
          <img
            className="w-full h-20 object-contain"
            src="./Images/mankindstore.png"
            alt=""
          />
        </div>
        <div className="images lg:flex items-center">
            <img
              className="w-full h-20 object-contain"
              src="./Images/flipkart.png"
              alt=""
            />
            <img
              className="w-full h-20 object-contain"
              src="./Images/amzonlogo.png"
              alt=""
            />
            <img
              className="w-full h-20 object-contain"
              src="./Images/pharmaeasy.png"
              alt=""
            />
            <img
              className="w-full h-20 object-contain"
              src="./Images/blinkit.png"
              alt=""
            />
          <img
            className="w-full h-20 object-contain"
            src="./Images/mankindstore.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Page6