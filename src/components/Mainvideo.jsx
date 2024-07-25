import React from 'react'

const Mainvideo = () => {
  return (
    <div className="video w-full h-full">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        src="./Videos/Main.mp4"
      ></video>
    </div>
  );
}

export default Mainvideo