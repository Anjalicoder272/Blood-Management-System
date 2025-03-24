import React from 'react'
import { FaPenFancy, FaPhoneAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import HeartImage from "../../assets/images/heart.svg"

const HowToGetBlood = () => {
  return (
    <div className='mx-[9%] mt-16'>
      <p className="mb-20 text-2xl md:text-3xl font-[700]">How to get Blood?</p>
      <div  data-aos="flip-up" data-aos-duration="2000" className="bg-blood relative mb-10 md:mb-0 rounded-full h-[229px] md:h-[250px] w-[229px] md:w-[250px] p-8 md:p-14 text-white mx-auto">
      <div className='absolute -top-7 -left-7 text-[50px] font-[700] text-center rounded-full border-[8px] w-[106px] h-[106px] text-blood border-blood'>1</div>
      <FaPenFancy className="text-white mx-auto " size={48} />
      <p className="text-center mt-6 text-[14px]">Fill in your personal information and eligibility details to get started.</p>
      </div>

      <div className='grid md:grid-cols-3'>
      <div  data-aos="flip-up" data-aos-duration="2000" className="bg-blood mb-10 md:mb-0 relative rounded-full h-[229px] md:h-[250px] w-[229px] md:w-[250px] p-8 md:p-14 text-white mx-auto">
      <div className='absolute -top-7 -left-7 text-[50px] font-[700] text-center  rounded-full border-[8px] w-[106px] h-[106px] text-blood border-blood'>2</div>
      <IoSearch className="text-white mx-auto " size={48} />
      <p className="text-center mt-6 text-[14px]">Find the closest and most compatible donors.</p>
      </div>
      <div className="hidden md:block">
        <img className='w-full' src={HeartImage} />
      </div>
      <div  data-aos="flip-up" data-aos-duration="2000" className="bg-blood relative rounded-full h-[229px] md:h-[250px] w-[229px] md:w-[250px] p-8 md:p-14 text-white mx-auto">
      <div className='absolute -top-7 -left-7 text-[50px] font-[700] text-center  rounded-full border-[8px] w-[106px] h-[106px] text-blood border-blood'>3</div>
      <FaPhoneAlt className="text-white mx-auto " size={48} />
      <p className="text-center mt-6 text-[14px]">Directly contact them through the platform </p>
      </div>

      </div>

    </div>
  )
}

export default HowToGetBlood