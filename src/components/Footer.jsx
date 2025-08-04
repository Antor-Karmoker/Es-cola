import React from 'react'
import footerlogo from '../assets/images/footer-logo.png'
import { Link } from 'react-router'

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import bannerfooter from '../assets/images/footer-banner.png'

const Footer = () => {
  return (
    <>
    
    <section style={{ background: `URL(${bannerfooter})`, backgroundRepeat: `no-repeat`,  backgroundSize: `cover`,}} id='footer' className= ''>
        <div className="container">
            <div id='footer-row' className='pt-[95px] pb-[100px] pb flex justify-between'>
                <div>

                {/* ----------------- img + text */}
                <div>
                    <Link ><img src={footerlogo} alt="footer-img" /></Link>
                    <div className='w-[296px] mt-[22px] mb-[42px]'><p className='text-[18px] font-normal font-inter text-main'>Lorem Ipsum is simply dummy texis the printing Lorem Ips is simply dummy text</p></div>
                </div>
                {/* -------------------- icon */}
                <div className='flex gap-[10px]'>
                    <div className='w-[35px] h-[35px] rounded-full border flex justify-center items-center hover:text-[#2F57EF] border-[#2F57EF]'><FaTwitter /></div>
                    <div className='w-[35px] h-[35px] rounded-full border flex justify-center items-center hover:text-[#2F57EF] border-[#2F57EF]'><FaFacebookF /></div>
                    <div className='w-[35px] h-[35px] rounded-full border flex justify-center items-center hover:text-[#2F57EF] border-[#2F57EF]'><FaInstagram /></div>
                    <div className='w-[35px] h-[35px] rounded-full border flex justify-center items-center hover:text-[#2F57EF] border-[#2F57EF]'><FaPinterestP /></div>
                </div>
                </div>
                {/* ------------------ links */}
                <div>
                    <div className='pb-[26px]'><h2 className='text-[21px] font-bold font-inter text-main'>All Links</h2></div>
                    <div>
                        <ul className='flex flex-col gap-[8px]'>
                            <li className='flex gap-[10px] items-center'>  <FaArrowRight /> <Link to={'/'} className='text-[17px] font-normal font-inter text-main' >Credit industrys</Link> </li>
                            <li className='flex gap-[10px] items-center'>  <FaArrowRight /> <Link to={'/'} className='text-[17px] font-normal font-inter text-main' >Credit Consulting</Link> </li>
                            <li className='flex gap-[10px] items-center'>  <FaArrowRight /> <Link to={'/'} className='text-[17px] font-normal font-inter text-main' >Business Credit industry</Link> </li>
                            <li className='flex gap-[10px] items-center'>  <FaArrowRight /> <Link to={'/'} className='text-[17px] font-normal font-inter text-main' >Finance industry</Link> </li>
                        </ul>
                    </div>
                </div>
                {/* --------------------- service */}
                <div>
                    <div className='pb-[26px]'><h2 className='text-[21px] font-bold font-inter text-main'>More Servicve</h2></div>
                    <div>
                        <ul className='flex flex-col gap-[8px]'>
                            <li className='flex gap-[10px] items-center'>  <FaArrowRight /> <Link to={'/'} className='text-[17px] font-normal font-inter text-main' >Ui Design</Link> </li>
                            <li className='flex gap-[10px] items-center'>  <FaArrowRight /> <Link to={'/'} className='text-[17px] font-normal font-inter text-main' >Ux Design</Link> </li>
                            <li className='flex gap-[10px] items-center'>  <FaArrowRight /> <Link to={'/'} className='text-[17px] font-normal font-inter text-main' >Digital Marketing</Link> </li>
                            <li className='flex gap-[10px] items-center'>  <FaArrowRight /> <Link to={'/'} className='text-[17px] font-normal font-inter text-main' >Video Editing</Link> </li>
                            <li className='flex gap-[10px] items-center'>  <FaArrowRight /> <Link to={'/'} className='text-[17px] font-normal font-inter text-main' >Pc Repairs</Link> </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='pb-[26px]'><h2 className='text-[21px] font-bold font-inter text-main'>More Servicve</h2></div>
                    <div className='flex flex-col gap-[11px]'>
                        <p className='text-[17px] font-normal font-inter text-main'>E-mail:example@mail.com</p>
                        <p className='text-[17px] font-normal font-inter text-main'>Call:+125 856 632</p>
                        <p className='w-[300px] text-[17px] font-normal font-inter text-main'>Location:3 Number Road ,C block, Housing,USA</p>
                    </div>


                </div>


            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Footer