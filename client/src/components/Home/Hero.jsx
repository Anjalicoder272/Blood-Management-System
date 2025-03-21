import React from "react";
import HeroImage from "../../assets/images/hero-image.svg";

const Hero = () => {

  return (
    <div>
      <div className="mx-[9%]">
        <div>
          <img className="absolute z-[-1] left-0 top-0 h-[783px]" src={HeroImage} alt="Hero" />
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-full md:w-1/3">
            <p className="text-[32px] md:text-[48px] text-[#3C3C3C] font-[700] text-center md:text-right">
              Save Life Donate Blood
            </p>
            <p className="text-center mt-[20px] md:mt-[30px] md:text-right text-[13px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <p className="bg-black mt-[60px] font-[900] w-[180px] ml-auto mr-auto md:mr-0 md:ml-auto text-white rounded-[15px] px-[21px] py-[8px] cursor-pointer">
          Get Blood Now
        </p>
      </div>
    </div>
  );
};

export default Hero;
