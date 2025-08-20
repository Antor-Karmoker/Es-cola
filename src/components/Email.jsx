import React from 'react'
import { LuMailOpen } from "react-icons/lu";
import { IoMailSharp } from "react-icons/io5";

const Email = () => {
  return (
    <>
    
    
    <section id='email' className='bg-[#00D09C] my-[120px]'>
        <div className="container">
            <div id='email-row' className='py-[75px] flex justify-around items-center'>

                <div className='flex  gap-[15px] items-center'>
                    <div><LuMailOpen className='text-[56px] text-white' /></div>
                    <div className='w-[445px]'><h2 className='text-[42px] font-bold font-inter text-[#fff]'>Subscribe your email for Newsletter</h2></div>
                </div>
                <div className='w-[559px] h-[72px] rounded-[10px] flex justify-around items-center bg-[#fff]'>
                    <input className='w-[60%] outline-none text-[18px] font-normal font-inter text-main' type="email" placeholder='Email Address' />
                    <button className='w-[169px] my-[9px] py-[20px] bg-[#2F57EF] rounded-[5px] flex justify-center gap-[10px] items-center '> 
                        <IoMailSharp className='text-[#fff] text-[18px]' />
                        <p className='text-[15px] font-medium font-inter text-[#fff]'>Subscribe</p>
                    </button>

                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Email