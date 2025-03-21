import React from 'react'
import { FaPenFancy } from "react-icons/fa";
import HeartImage from "../../assets/images/heart.svg"

const HowToGetBlood = () => {
  return (
    <div className='mx-[9%] mt-16'>
      <p className="mb-20 text-3xl font-[700]">How to get Blood?</p>
      <div className="bg-blood relative rounded-full h-[250px] w-[250px] p-14 text-white mx-auto">
      <div className='absolute -top-7 -left-7 text-[50px] font-[700] text-center rounded-full border-[8px] w-[106px] h-[106px] text-blood border-blood'>1</div>
      <FaPenFancy className="text-white mx-auto " size={48} />
      <p className="text-center mt-6 text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className='grid md:grid-cols-3'>
      <div className="bg-blood relative rounded-full h-[250px] w-[250px] p-14 text-white mx-auto">
      <div className='absolute -top-7 -left-7 text-[50px] font-[700] text-center  rounded-full border-[8px] w-[106px] h-[106px] text-blood border-blood'>2</div>
      <FaPenFancy className="text-white mx-auto " size={48} />
      <p className="text-center mt-6 text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="hidden md:block">
        <img className='w-full' src={HeartImage} />
      </div>
      <div className="bg-blood relative rounded-full h-[250px] w-[250px] p-14 text-white mx-auto">
      <div className='absolute -top-7 -left-7 text-[50px] font-[700] text-center  rounded-full border-[8px] w-[106px] h-[106px] text-blood border-blood'>3</div>
      <FaPenFancy className="text-white mx-auto " size={48} />
      <p className="text-center mt-6 text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      </div>

    </div>
  )
}

export default HowToGetBlood