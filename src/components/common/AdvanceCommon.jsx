import React from 'react'
import { FaStar } from "react-icons/fa";

const AdvanceCommon = () => {
  return (
    <div>


        <div className='w-[410px] h-[363px] bg-[#E3E3E3] rounded-[5px] flex flex-col justify-center  relative'>
            <div className='w-[150px] h-[150px] bg-[#D9D9D9] rounded-full flex justify-center items-center absolute top-[-81px] left-[111px]'><img src="#" alt="ad-img" /></div>
            <div className='pt-[33px] flex justify-center'> <h2 className='pt-[33px] text-[21px] font-bold font-inter text-main'>Devon Lane</h2></div>
            <div className=' flex justify-center'> <p className='text-[17px] font-normal font-inter text-main'>President of Sales</p> </div>
            <div className='flex  justify-center'>

            <div className='w-[326px]  pt-[30px] pb-[34px] text-center'><p className='text-[17px] font-normal font-inter text-main'>Web designing in a powerful way of just not an only professions, however, in a passion for our Company.</p></div>
            </div>
            <div className='flex gap-[5px] justify-center items-center'>
                
                <FaStar className='text-[#FFBA08]' />
                <FaStar className='text-[#FFBA08]' />
                <FaStar className='text-[#FFBA08]' />
                <FaStar className='text-[#FFBA08]' />
                <FaStar className='text-[#FFBA08]' />
            </div>

        </div>






    </div>
  )
}

export default AdvanceCommon