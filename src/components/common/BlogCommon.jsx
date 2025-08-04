import React from 'react'
import { Link } from 'react-router'
import { MdInsertDriveFile } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCommon = () => {
  return (
    <>

    <div>
        <div className='w-[410px] h-[622px] bg-[#fff] shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.1)]'>
            <div className='w-full h-[300px] bg-[#D9D9D9]'>

     <div className='w-[80px] h-[80px] bg-[#2F57EF] flex justify-center items-center mt-[20px] ml-[20px]'><p className='w-[40px] text-[21px] font-bold font-inter text-[#fff]' >21 FEB</p> </div>  
               
            </div>
            <div className='pl-[30px]'>

           <div className='flex items-center gap-[10px] pt-[30px]'>
            <div className='flex gap-[10px] items-center'>
                <MdInsertDriveFile className= '  text-[#2F57EF]' />
                <p className='text-[17px] font-normal font-inter text-main'>Category</p>
            </div>
                        <div className='flex gap-[10px] items-center'>
                <IoIosChatbubbles className= '  text-[#2F57EF]' />
                <p className='text-[17px] font-normal font-inter text-main'>Comments (05)</p>
            </div>

           </div>
           <div className='w-[350px] pt-[19px] pb-[17px]'><h2 className='text-[21px] font-bold font-inter text-main'>Corporate culture refers to the values  beliefs Manket</h2></div>
           <div className='w-[350px]'><p className='text-[17px] font-normal font-inter text-main'>Contrary to popular belief, Lorem Ipsum is not simply random text many kindsman ontrary to popular belief Lorem Ipsum.</p></div>
           <Link className='text-[15px] font-normal font-inter pt-[35px] text-main capitalize flex gap-[10px] items-center'>Read more <FaArrowRightLong className='text-[#2F57EF]' /></Link>


            </div>
        </div>
    </div>
    
    
    
    
    </>
  )
}

export default BlogCommon