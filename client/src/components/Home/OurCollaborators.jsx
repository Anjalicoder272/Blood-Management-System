import React from "react";
import HeartImage1 from "../../assets/images/heartimage1.svg";
import HeartImage2 from "../../assets/images/heartimage2.svg";
import HeartImage3 from "../../assets/images/heartimage3.svg";

const OurCollaborators = () => {
  return (
    <div className="mt-12 mx-[5%]">
      <p className="text-black text-3xl font-[700] mb-6 text-center">
        Our Collaborators
      </p>

      {/* Card Container for Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        <img
          src={HeartImage1}
          alt="Collaborator 1"
          className="w-full h-64 object-contain rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        />
        <img
          src={HeartImage2}
          alt="Collaborator 2"
          className="w-full h-64 object-contain rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        />
        <img
          src={HeartImage3}
          alt="Collaborator 3"
          className="w-full h-64 object-contain rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        />
      </div>

      {/* Card Container for Mobile */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        <div className="flex justify-center">
          <img
            src={HeartImage1}
            alt="Collaborator 1"
            className="w-full max-w-xs h-64 object-contain rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={HeartImage2}
            alt="Collaborator 2"
            className="w-full max-w-xs h-64 object-contain rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={HeartImage3}
            alt="Collaborator 3"
            className="w-full max-w-xs h-64 object-contain rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl cursor-pointer"
          />
        </div>
      </div>

    </div>
  );
};

export default OurCollaborators;
