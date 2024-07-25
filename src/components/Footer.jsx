import React from 'react'

const Footer = () => {
  return (
    <div
      className="relative h-[100vh]"
      style={{ clipPath: `polygon(0% 0, 100% 0%, 100% 100%, 0 100%)` }}
    >
      <div className="relative h-[200vh] -top-[100vh]">
        <div className="h-[100vh] sticky top-0">
          <div className="Content bg-red-500 h-full">
            <h1 className="text-xl uppercase flex pt-96 justify-center">
              Footer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer