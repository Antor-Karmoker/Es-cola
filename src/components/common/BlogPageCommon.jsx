import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { FaRegFolderOpen } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const BlogPageCommon = () => {
  return (
    <>
    
    <div className='w-[850px] h-[836px]'>
        {/* ------------- img */}
        <div className='w-full h-[462px] bg-[#D9D9D9]' ><img src="" alt="" /></div>

        {/* --------------- details */}
        <div className='flex items-center gap-[18px] pt-[30px]'>
            <div className='flex items-center gap-[10px]'><AiOutlineUser /><p className='text-[17px] font-normal font-inter text-main'>By admin</p></div>
            <div className='flex items-center gap-[10px]'><FaRegFolderOpen /><p className='text-[17px] font-normal font-inter text-main'>Category</p></div>
            <div className='flex items-center gap-[10px]'><SlCalender /><p className='text-[17px] font-normal font-inter text-main'>October 19, 2023</p></div>
        </div>

    {/* ------------- heading */}
    <div className='w-[763px] pt-[12px] pb-[20px]'><h2 className='text-[36px] font-bold font-inter text-main'>Unleashing Your Inner Genius: A Guide to Achieving Your Ambitions</h2></div>

    {/* ---------- descripton */}
    <div className='w-[770px] pb-[33px]'><p className='text-[17px] font-normal font-inter text-main'>Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper</p></div>
      



      {/* ----------- button */}
      <button className='w-[169px] bg-[#2F57EF] rounded-[5px] text-[15px] font-medium font-inter text-white flex gap-[10px] items-center justify-center py-[24px]'>Read more <HiOutlineArrowNarrowRight /></button>




    </div>
    
    </>
  )
}

export default BlogPageCommon