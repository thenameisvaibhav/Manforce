import React, { useState } from "react";
import Loader from "./Loader";
import { motion } from "framer-motion";

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
        <h1 className="text-4xl pb-10 font-semibold uppercase">
          Age Verification
        </h1>
        <h1 className="text-2xl font-semibold mb-8">Are you 18+?</h1>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black px-10 py-4 mr-4 rounded-full text-xl"
            onClick={handleYesClick}
          >
            Yes
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black px-10 py-4 rounded-full text-xl"
            onClick={handleNoClick}
          >
            No
          </motion.button>
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
      {isVerified ? <Loader /> : <AgeVerification onVerify={handleVerify} />}
    </div>
  );
};

export default Age;
