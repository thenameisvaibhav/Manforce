import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div
      className="relative h-[100vh]"
      style={{ clipPath: `polygon(0% 0, 100% 0%, 100% 100%, 0 100%)` }}
    >
      <div className="relative h-[200vh] -top-[100vh]">
        <div className="h-[100vh] sticky top-0">
          <div className="Content h-full py-20 lg:pt-1">
            <div className="image w-full">
              <img
                className="w-full h-fit lg:h-80 object-contain"
                src="https://www.manforcecondoms.com/img/mfc-white.svg"
                alt=""
              />
            </div>
            <div className="text py-10">
              <div className="flex items-center justify-center gap-8 lg:gap-96">
                <div className="work">
                  <h1 className="text-xl lg:text-2xl hover:underline underline-offset-2">Privacy policy</h1>
                  <h1 className="text-xl lg:text-2xl hover:underline underline-offset-2">Returns</h1>
                  <h1 className="text-xl lg:text-2xl hover:underline underline-offset-2">
                    Terms & <br /> Conditions
                  </h1>
                  <h1 className="text-xl lg:text-2xl hover:underline underline-offset-2">Shipping</h1>
                </div>
                <div className="social">
                  <h1 className="text-xl lg:text-2xl hover:underline underline-offset-2">Instagram</h1>
                  <h1 className="text-xl lg:text-2xl hover:underline underline-offset-2">Facebook</h1>
                  <h1 className="text-xl lg:text-2xl hover:underline underline-offset-2">Linkedin</h1>
                  <h1 className="text-xl lg:text-2xl hover:underline underline-offset-2">Contact</h1>
                </div>
              </div>
            </div>
            <div className="py-10">
              <h1 className="text-xl lg:text-2xl text-center">
                {" "}
                © 2023 Manforce. All rights reserved{" "}
              </h1>
              <div className="social flex items-center justify-evenly mt-7">
                <FaFacebook className="h-8 w-8 cursor-pointer" />
                <FaXTwitter className="h-8 w-8 cursor-pointer" />
                <FaYoutube className="h-8 w-8 cursor-pointer" />
                <FaInstagram className="h-8 w-8 cursor-pointer" />
              </div>
              <div className="email flex gap-1 items-center font-['Nuckle'] mt-10 justify-center">
                <p className="text-xl font-semibold">Email:</p>
                <a
                  className="underline underline-offset-2 font-semibold"
                  href="#"
                >
                  contact@mankindpharma.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer