import React from 'react'
import frame1 from '../assets/images/Frame1.png'
import cart from '../assets/images/positoncart.png'
import CommonHead from './common/CommonHead'
import { IoIosCheckmarkCircle } from "react-icons/io";
import popimg from '../assets/images/popimg.png'

const Activity = () => {
  return (
    <>
    
    <section id='activity' className=' relative'>
        <div className=' absolute top-[-48px] right-[49px]'><img src={popimg} alt="pop-img" /></div>
        <div className="container">
            <div id='activity-row' className='flex  items-center justify-center gap-[80px]'>
        {/* --------------------- left-side  */}
                <div>
    {/* -------------------- cart div */}
                <div className='w-[770px] h-[369px] bg-[#D9D9D9] ' >
                    <div className='w-[267px] bg-[#fff] py-[12px] flex   justify-center rounded-[5px] items-center gap-[10px]'>
                        <img src={cart} alt="cart-img" />
                        <div>
                            <h2 className='text-[21px] font-bold font-inter text-main'>Daily Activity</h2>
                            <p className='text-[17px] font-normal font-inter text-main'>Loream is ispam</p>
                        </div>
                        </div>
                </div>
{/* ------------------------- mini div */}
                <div className=' flex mt-[30px] '>    
                    <div className='w-[369px] mr-[32px] h-[154px]  bg-[#F3F6FB] flex justify-center items-center gap-[10px]'>
                        <div><img src={frame1} alt="frame1" /></div>
                        <div>
                            <h2 className='text-[40px] font-bold font-inter text-[#6864ED]'>200+</h2>
                            <p className='text-[21px] font-medium font-inter text-[#151718]'>Courses</p>
                        </div>
                    </div>
                        <div className='w-[369px] h-[154px] bg-[#F3F6FB] flex justify-center items-center gap-[10px]'>
                        <div><img src={frame1} alt="frame1" /></div>
                        <div>
                            <h2 className='text-[40px] font-bold font-inter text-[#6864ED]'>200+</h2>
                            <p className='text-[21px] font-medium font-inter text-[#151718]'>Courses</p>
                        </div>
                    </div>
                </div>
                </div>

{/* ------------------------ right-side */}
                <div className=''>
                    <CommonHead commonp={'Top Popular Course'} />
                    <div className='w-[440px] pt-[18px] pb-[17px]'><h2 className='text-[42px] font-bold font-inter text-main'>Knowledge is power  education is the key</h2></div>
                    <div className='w-[408px]'><p className='text-[17px] font-normal font-inter text-main'>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training</p></div>
                    <div className='flex gap-[20px] mt-[43px] mb-[37px]'>
                        <IoIosCheckmarkCircle className='text-[30px] text-[#3D64FF]' />
                        <div>
                            <h2 className='text-[21px] pb-[12px] font-bold font-inter text-main' >Smart Scholars</h2>
                            <div className='w-[357px]'><p className='text-[17px] font-normal font-inter text-main'>The goal of ecology is to understand how organisms interact with each other </p></div>
                        </div>

                    </div>
                                        <div className='flex gap-[20px]'>
                        <IoIosCheckmarkCircle className='text-[30px] text-[#3D64FF]' />
                        <div>
                            <h2 className='text-[21px] pb-[12px] font-bold font-inter text-main' >Knowledge Hub</h2>
                            <div className='w-[357px]'><p className='text-[17px] font-normal font-inter text-main'>Ecologists use a variety of methods, such as field observa tions, experiments</p></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Activity