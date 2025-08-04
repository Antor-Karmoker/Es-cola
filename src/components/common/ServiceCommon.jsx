import React from 'react'
import { CiUser } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa";

const ServiceCommon = () => {
  return (
    <div>

        <div className='w-[410px] h-[527px] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] px-[30px] pt-[20px] pb-[30px]'>
            <div className='flex justify-between'>
                <div className='flex gap-[10px] items-center'>
                    <div className='w-[40px] h-[40px]  bg-[#D9D9D9] rounded-full'></div>
                    <p className='text-[13px] font-medium font-inter text-main'>By Angela</p>
                </div>
                <div className='flex gap-[10px] items-center '>
                    <CiUser />
                    <p className='text-[13px] font-normal font-inter text-main'>50 Students</p>

                </div>
            </div>
            <div className='w-[350px] h-[250px] bg-[#D9D9D9] mt-[18px] rounded-t-[5px] flex flex-col justify-end items-end mb-[10px] mr-[10px]'><p className=' w-[113px]   text-[13px] font-medium font-inter text-[#fff] py-[10px] bg-[#2F57EF] rounded-[5px] flex justify-center items-center'>Development</p></div>
            <div className='flex gap-[10px] pt-[18px] pb-[16px]'>
                <div className='flex gap-[5px] items-center'>
                <FaStar className='text-[#FF9747]' />
                <FaStar className='text-[#FF9747]' />
                <FaStar className='text-[#FF9747]' />
                <FaStar className='text-[#FF9747]' />
                <FaStar className='text-[#FF9747]' />

                </div>
                <p className='text-[12px] font-medium font-inter text-main'>(15 Reviews)</p>
            </div>
            <div className='w-[330px] pb-[14px]'><h2 className='text-[25px] font-bold font-inter text-main'>The Power of Personal Branding</h2></div>
            <Link className='text-[18px] font-bold font-inter text-[#2F57EF] flex gap-[10px] items-center'>Enroll Now <FaArrowRight /></Link>

        </div>





    </div>
  )
}

export default ServiceCommon