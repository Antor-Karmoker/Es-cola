import React from 'react'
import Breadcrum from '../components/common/Breadcrum'
import BlogPageCommon from '../components/common/BlogPageCommon'
import { IoIosArrowForward } from "react-icons/io";

const BlogPage = () => {
  return (
    <>
    
    
    
    <section id='blogPage' className='pb-[120px]'>
        <Breadcrum breadContent={'Blog classic'} />
        <div className="container">
            <div id='blogPage-row' className='pt-[120px]'>
                {/* ------------ left-side */}
                <div>
                <div className='flex flex-col gap-[80px]'>
                <BlogPageCommon />
                <BlogPageCommon />
                <BlogPageCommon />
                </div>

                {/* ---------- pagination */}
                <div className='flex items-center gap-[15px] pt-[100px] justify-center'>
                    <div className='w-[50px] h-[50px] rounded-[10px] bg-[#F3F6FF] hover:bg-[#2F57EF] duration-[.4s] text-[18px] font-bold font-inter text-main hover:text-white flex justify-center items-center'>1</div>
                    <div className='w-[50px] h-[50px] rounded-[10px] bg-[#F3F6FF] hover:bg-[#2F57EF] duration-[.4s] text-[18px] font-bold font-inter text-main hover:text-white flex justify-center items-center'>2</div>
                    <div className='w-[50px] h-[50px] rounded-[10px] bg-[#F3F6FF] hover:bg-[#2F57EF] duration-[.4s] text-[18px] font-bold font-inter text-main hover:text-white flex justify-center items-center'>3</div>
                    <div className='w-[50px] h-[50px] rounded-[10px] bg-[#F3F6FF] hover:bg-[#2F57EF] duration-[.4s] text-[18px] font-bold font-inter text-main hover:text-white flex justify-center items-center'><IoIosArrowForward /></div>
                </div>

                </div>
            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default BlogPage