import React from "react";

const Hero = () => {
  return (
    <div className="mx-[9%]">
    <div className="flex justify-center md:justify-end">
      <div className=" w-full md:w-1/3">
        <p className="text-[32px] md:text-[48px] text-[#3C3C3C] font-[700] text-center md:text-right">Save Life Donate Blood </p>
        <p className="text-center mt-[20px] md:mt-[30px] md:text-right text-[13px] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      </div>
      <p className="bg-black mt-[90px] font-[900] w-[180px] ml-auto mr-auto md:mr-0 md:ml-auto  text-white rounded-[15px] px-[21px] py-[8px]">
          Get Blood Now
      </p>
     
    </div>
  );
};

export default Hero;
