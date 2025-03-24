import React from "react";
import Image1 from "../../assets/images/mission-1.svg";
import Image2 from "../../assets/images/mission-2.svg";
import Image3 from "../../assets/images/mission-3.svg";

const OurCollaborators = () => {
  return (
    <div className="mt-24 mx-[9%]">
      <div className="flex flex-col md:flex-row md:grid-cols-3 gap-14">
        {/* Card 1 */}
        <div data-aos="zoom-in-right" className="bg-blood p-20 rounded-2xl shadow-lg transition-all duration-300 hover:scale-135 hover:shadow-2xl relative group">
          <img
            src={Image1}
            alt="Collaborator 1"
            className="h-[109px] md:h-[140px] mx-auto transition-transform duration-300 group-hover:scale-110"
          />
          <p className="text-white text-center text-[13px] md:text-[18px] font-bold mt-10 hidden transition-opacity duration-300 group-hover:block">
            To be a responsible donor, you must get a check-up.
          </p>
        </div>

        {/* Card 2 */}
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="bg-blood p-20 rounded-2xl shadow-lg transition-all duration-300 hover:scale-135 hover:shadow-2xl relative group">
          <img
            src={Image2}
            alt="Collaborator 2"
            className="h-[109px] md:h-[140px] mx-auto transition-transform duration-300 group-hover:scale-110"
          />
          <p className="text-white text-center text-[13px] md:text-[18px] font-bold mt-10 hidden transition-opacity duration-300 group-hover:block">
            Your blood type should be compatible with the receiver&apos;s type.
          </p>
        </div>

        {/* Card 3 */}
        <div data-aos="zoom-in-left" className="bg-blood p-20 rounded-2xl shadow-lg transition-all duration-300 hover:scale-135 hover:shadow-2xl relative group">
          <img
            src={Image3}
            alt="Collaborator 3"
            className="h-[109px] md:h-[140px] mx-auto transition-transform duration-300 group-hover:scale-110"
          />
          <p className="text-white text-center text-[13px] md:text-[18px] font-bold mt-10 hidden transition-opacity duration-300 group-hover:block">
            Donate your blood and save a life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCollaborators;
