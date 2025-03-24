import React from "react";
import Image1 from "../../assets/images/mission-1.svg";
import Image2 from "../../assets/images/mission-2.svg";
import Image3 from "../../assets/images/mission-3.svg";

const OurCollaborators = () => {
  return (
    <div className="mt-24 mx-[9%]">

      <div className="grid md:grid-cols-3 gap-14">
        <div className="bg-blood p-20 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={Image1}
          alt="Collaborator 1"
          className="h-[109px] md:h-[140px] mx-auto"
        />
        <p className="text-white text-center text-[13px] md:text-[18px] font-bold mt-10">To be a responsible donor, you must get a check-up.</p>
        </div>

        <div className="bg-blood p-20 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={Image2}
          alt="Collaborator 1"
          className="h-[109px] md:h-[140px] mx-auto"
        />
        <p className="text-white text-center text-[13px] md:text-[18px] font-bold mt-10">
        Your blood type should be compatible with the receiver&apos;s type.
        </p>
        </div>

        <div className="bg-blood p-20 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={Image3}
          alt="Collaborator 1"
          className="h-[109px] md:h-[140px] mx-auto"
        />
        <p className="text-white text-center text-[13px] md:text-[18px] font-bold mt-10">
        Donate your blood and save a life.
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default OurCollaborators;
