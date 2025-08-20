import React from 'react'
import CommonHead from './common/CommonHead'

const Courses = () => {
  return (
    <>
    
    
    <section id='course' className='py-[120px]'>
        <div className="container">
            <div id='course-row'>

                {/* ---------- heading */}
                <div className='flex justify-around items-center'>
                    <div>
                <CommonHead commonp={'Top Popular Course'}  />
                <div className='w-[460px] pt-[20px]'><h2  className='text-[42px] font-bold font-inter'>Knowledge is power  education is the key</h2></div>
                    </div>
                <div>           
                    <div className='w-[517px]'><p className='text-[17px] font-normal font-inter text-main'>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as</p></div>
                
                       <button className='w-[158px] mt-[24px] border border-[#2F57EF] py-[20px] text-[15px] font-medium font-inter text-main rounded-[5px]' >Contact us</button>            
                </div>
                </div>
            </div>

{/* ------------- details div */}
            <div className=' flex justify-center gap-[30px] pt-[50px]'>
                <div className='w-[519px] h-[302px] bg-[#FCCC44] pl-[42px] rounded-[20px] '>
                    <div className='flex flex-col gap-[16px]'>


                    <div className=' pt-[50px]'><h2 className='text-[21px] font-bold font-inter text-main'>education is the key</h2></div>
                    <div className='flex items-center gap-[10px]'> <div className='w-[20px] h-[20px] rounded-full bg-[#3D64FF] flex justify-center items-center'></div><p className='text-[17px] font-normal font-inter text-main'>education is the key</p></div>
                    <div className='flex items-center gap-[10px]'> <div className='w-[20px] h-[20px] rounded-full bg-[#3D64FF] flex justify-center items-center'></div><p className='text-[17px] font-normal font-inter text-main'>A Whole Lot of Digital Love for Less</p></div>
                    <div className='flex items-center gap-[10px]'> <div className='w-[20px] h-[20px] rounded-full bg-[#3D64FF] flex justify-center items-center'></div><p className='text-[17px] font-normal font-inter text-main'>edKnow what your target market wants and needs</p></div>
                    <div className='flex items-center gap-[10px]'> <div className='w-[20px] h-[20px] rounded-full bg-[#3D64FF] flex justify-center items-center'></div><p className='text-[17px] font-normal font-inter text-main'>A Whole Lot of Digital Love for Less</p></div>
                    </div>

                </div>
                <div className='w-[701px] h-[302px] bg-[#D9D9D9] rounded-[20px]'></div>
            </div>


        </div>
    </section>
    
    
    
    </>
  )
}

export default Courses