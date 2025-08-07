import React from 'react'
import { FaPlay } from "react-icons/fa";
import AdvanceCommon from './common/AdvanceCommon';
import advanpic from '../assets/images/Testimonials.png'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const Advance = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   nextArrow: <FaArrowRight/>,
    prevArrow: <FaArrowLeft />
  };



  return (
    <>
    
    
    <section style={{ background: `URL(${advanpic})`, backgroundRepeat: `no-repeat`,  backgroundSize: `cover`,}} id='advance' className=" text-white  relative">
      <div className='container'>

      {/* --------------- CTA Section */}
      <div className="w-[1290px] h-[330px] absolute top-[-204px] left-[294px] mx-auto mt-10 flex rounded-md overflow-hidden">
        {/*------------------ Left Side */}
        <div className="bg-[#1E64F0] w-[809px] p-10 flex flex-col justify-center">
          <h2 className="text-[42px] font-bold font-inter text-[#fff]">
            We made passion our <br />
            raw material
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <div className='w-[60px] h-[60px] rounded-full border border-[#F8BC26] flex justify-center items-center'>
            <div className="w-[46px] h-[46px] bg-[#F8BC26] flex justify-center items-center rounded-full"><FaPlay /></div>

            </div>
            <div>
              <p className="text-[17px] font-normal font-inter text-[#fff]">Call us now</p>
              <h2 className="text-[21px] font-bold font-inter text-[#fff]">+44 7700 900217</h2>
            </div>
          </div>
        </div>

        {/*------------- Right Side - Placeholder for Image */}
        <div className="w-[481px] bg-gray-300"></div>
      </div>

      {/* ------------ Testimonials Section */}
      <div className="pt-[363px] pb-[119px] flex gap-[50px] ">
        <div>
        <p className="text-[18px] font-bold font-inter text-[#fff]">Testimonials</p>
        <div className='w-[410px] pt-[15px] pb-[20px]'> <h2 className="text-[42px] font-bold font-inter text-[#fff]">Advanced Engine Services</h2>  </div>
        <div className='w-[384px]'>
        <p className="text-[17px] font-normal font-inter text-[#fff]">
          Education is the process of acquiring knowledge, skills, values, and
          attitudes through various methods such as teaching.
        </p>
        </div>
        </div>
        {/* ------------- Testimonials Grid */}

        <div className='flex gap-[30px]'>

        <AdvanceCommon />
        <AdvanceCommon />
        <AdvanceCommon />
 
        </div>

      </div>
      </div>


    </section>
    
    
    </>
  )
}

export default Advance