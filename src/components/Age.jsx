import React, { useState } from "react";
import Loader from "./Loader";


const AgeVerification = ({ onVerify }) => {
  const handleYesClick = () => {
    onVerify(true);
  };

  const handleNoClick = () => {
    alert("You must be 18+ to enter this site.");
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-3xl mb-8">Are you 18+?</h1>
        <div>
          <button
            className="bg-white text-black px-4 py-2 mr-4 rounded"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded"
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

const Age = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = (verified) => {
    setIsVerified(verified);
  };

  return (
    <div className="z-[99999] overflow-hidden w-full h-screen fixed">
      {isVerified ? <Loader/> : <AgeVerification onVerify={handleVerify} />}
    </div>
  );
};

export default Age;
