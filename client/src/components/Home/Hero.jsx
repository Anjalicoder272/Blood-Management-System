import React, { useState, useEffect } from "react";
import HeroImage from "../../assets/images/hero-image.svg";

const Hero = () => {
  const words = ["Donate Blood, Become a Hero - A Drop of Yours Can Save a Life!"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[index];

      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
        }
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div>
      <div className="mx-[9%]">
        <div>
          <img
            className="absolute z-[-1] left-0 top-0 h-[550px] md:h-[783px] animate-fadeIn"
            src={HeroImage}
            alt="Hero"
          />
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-full md:w-1/3">
            <p className="text-[32px] mt-2 md:text-[48px] text-[#3C3C3C] font-[700] text-center md:text-right animate-slideIn">
              Save Life Donate Blood
            </p>
            <p className="text-center mt-[20px] md:mt-[30px] md:text-right text-[13px] animate-fadeIn delay-200">
              Blood donation is a simple yet powerful act that can save countless lives. 
              With every donation, you give someone a second chance at life and contribute 
              to a healthier, stronger community. Blood cannot be manufactured; it can 
              only come from generous donors. By stepping forward and donating, you 
              become a hero to those in need. Your small act of kindness can make a 
              world of difference—donate blood today and be the reason someone gets 
              to see tomorrow.
            </p>
            {/* Typewriter Effect */}
            <p className="text-center md:text-right text-black md:text-blood mt-14 text-[23px] font-bold ">
              {text}
              <span className="animate-blink">|</span>
            </p>
          </div>
        </div>
        <p className="bg-black mt-[60px] font-[900] w-[180px] ml-auto mr-auto md:mr-0 md:ml-auto text-white rounded-[15px] px-[21px] py-[8px] cursor-pointer animate-bounce">
          Get Blood Now
        </p>
      </div>
    </div>
  );
};

export default Hero;
