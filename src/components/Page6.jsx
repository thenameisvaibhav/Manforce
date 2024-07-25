import React from 'react'

const Page6 = () => {
  return (
    <div className="w-full font-['Nuckle'] bg-[#F1F1F1]">
      <div className="flex items-center justify-center">
        <video
          className="w-full h-96 object-cover"
          autoPlay
          muted
          loop
          src="https://videos.pexels.com/video-files/8680286/8680286-hd_1080_1620_29fps.mp4"
        ></video>
        <div className="absolute text-black">
          <h1 className="text-center text-5xl font-semibold">52,00,00,000</h1>
          <h1 className="text-center text-xs mt-5">
            Manforce condoms sold in FY2023
          </h1>
        </div>
      </div>

      <div className="w-full py-5">
        <h1 className="text-center text-4xl font-semibold tracking-tighter text-black py-5">Avaibable ON</h1>
        <div className="images lg:flex whitespace-nowrap">
          <div className="flex">
            <img
              className="w-full h-20 object-contain"
              src="https://www.manforcecondoms.com/img/flipkart-icon.png"
              alt=""
            />
            <img
              className="w-full h-20 object-contain"
              src="https://www.manforcecondoms.com/img/amzonlogo.png"
              alt=""
            />
          </div>
          <div className="flex">
            <img
              className="w-full h-20 object-contain"
              src="https://www.manforcecondoms.com/img/pharmaeasy-logo.png"
              alt=""
            />
            <img
              className="w-full h-20 object-contain"
              src="https://www.manforcecondoms.com/img/blinkit-logo.png"
              alt=""
            />
          </div>
          <img
            className="w-full h-20 object-contain"
            src="https://www.manforcecondoms.com/img/mankindstore.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Page6