import React from 'react'

const Page6 = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <video
          className="w-full h-96 object-cover"
          autoPlay
          muted
          loop
          src="https://videos.pexels.com/video-files/8680286/8680286-hd_1080_1620_29fps.mp4"
        ></video>
        <h1 className="absolute text-black">Helloo</h1>
      </div>

      <div className="w-full">
        <h1>Avaibable ON</h1>
        <div className="images flex">
          <img className='w-96 h-10 object-contain'
            src="https://team-nkg-reimagine-round1.vercel.app/assets/bigbasket-DqPLd0pN.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Page6