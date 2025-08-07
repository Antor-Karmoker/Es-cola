import React from 'react'
import logo from '../assets/images/illu.png'
import { Link } from 'react-router'
import CommonHead from './common/CommonHead'
import { IoIosCheckmarkCircle } from "react-icons/io";

const Popular = () => {
  return (
    <>
    
    
    <section id='popular' className='pt-[120px] pb-[112px]'>
        <div className="container">
            <div id=' popular-row' className='flex justify-around items-center'>
                <Link ><img src={logo} alt="" /></Link>
                <div>
                    <CommonHead commonp={'Top Popular Course'} />
                    <div className='w-[460px] pt-[20px]'> <h2 className='text-[42px] font-bold font-inter text-main'>Knowledge is power  education is the key</h2> </div>
                    <div className='w-[518px] pt-[20px] pb-[40px]'><p className='text-[17px] font-normal font-inter '>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training, or research. It plays a crucial role in </p></div>
                    <div className='flex gap-[10px] items-center pb-[16px]'>
                        <IoIosCheckmarkCircle className=' rounded-full text-[#3D64FF]' />
                        <p className='text-[17px] font-normal font-inter text-main'>education is the key</p>
                    </div>
                                        <div className='flex gap-[10px] items-center pb-[18px]'>
                        <IoIosCheckmarkCircle className=' rounded-full text-[#3D64FF]' />
                        <p className='text-[17px] font-normal font-inter text-main'>A Whole Lot of Digital Love for Less</p>
                    </div>
                                        <div className='flex gap-[10px] items-center pb-[16px]'>
                        <IoIosCheckmarkCircle className=' rounded-full text-[#3D64FF]' />
                        <p className='text-[17px] font-normal font-inter text-main'>Know what your target market wants and needs</p>
                    </div>
                                        <div className='flex gap-[10px] items-center'>
                        <IoIosCheckmarkCircle className=' rounded-full text-[#3D64FF]' />
                        <p className='text-[17px] font-normal font-inter text-main'>A Whole Lot of Digital Love for Less</p>
                    </div>

                    
                </div>

            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Popular