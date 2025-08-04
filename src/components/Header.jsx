import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <>
    <section id='header' className='bg-[#F3F6FB]'>
        <div  className="container">
            <div id='header-row' className='py-[12px] flex justify-between'>
              <div className='flex gap-[10px] items-center'>
              <IoLocationSharp />
                <p className='text-[17px] font-normal font-inter text-main'>6391 Elgin St. Celina, 10299</p>

              </div>
              <div className='flex gap-[30px] items-center'>
                <div className='flex gap-[10px] items-center'>
                  <FaPhone />
                  <p className='text-[17px] font-normal font-inter text-main'>(629) 555-0129</p>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <MdEmail />
                  <p className='text-[17px] font-normal font-inter text-main'>info@example.com</p>
                </div>
              </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Header