import React from 'react'
import breadimg from '../../assets/images/breadbanner.png'
import { Link } from 'react-router'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = ({breadlink , breadContent}) => {
  return (
    <>
    
    
    <section   style={{  background: `URL(${breadimg})`,  backgroundRepeat: `no-repeat`,  backgroundSize: `cover`, }} id='breadcrumb'>
        <div className="container">
            <div id='breadcrumb-row' className='pt-[97px] pb-[123px] text-center'>
                <h2 className='text-[36px] pb-[20px] font-bold font-inter text-main'>{breadContent}</h2>
                <div className='flex justify-center gap-[10px] items-center'>

                <Link className='text-[21px] font-bold font-inter text-main' to={'/'}>home</Link>
                <IoIosArrowForward />
                <Link className='text-[21px] font-bold font-inter text-main' to={'/breadlink'} >{breadContent}</Link>
                </div>
                

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Breadcrum