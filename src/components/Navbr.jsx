import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/main-logo.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const Navbr = () => {
  return (
    <>
    
    <section id='navbar' className='pt-[23px] pb-[26px]'>
      <div className="container">
        <div id='navbar-row' className='flex justify-between items-center'>
          {/* ------------- img */}
          <Link className=''><img src={logo} alt="main-logo" /></Link>

          {/* -------------- nav-item */}
          <div>
            <ul className='flex gap-[24px]'>
              <li className='flex gap-[10px] items-center'><Link to={'/'}   className='text-[16px] flex items-center gap-[10px]   font-medium font-inter  text-main'>Home         <MdKeyboardArrowDown /></Link> </li>
              <li className='flex gap-[10px] items-center'><Link to={'/about'}   className='text-[16px] flex items-center gap-[10px]   font-medium font-inter text-main'>About Us      <MdKeyboardArrowDown /></Link> </li>
              <li className='flex gap-[10px] items-center'><Link to={'/service'}   className='text-[16px] flex items-center gap-[10px]   font-medium font-inter text-main'>Services  <MdKeyboardArrowDown /></Link> </li>
              <li className='flex gap-[10px] items-center'><Link  to={'/'}  className='text-[16px]  flex items-center gap-[10px]  font-medium font-inter text-main'>Projects    <MdKeyboardArrowDown /></Link> </li>
              <li className='flex gap-[10px] items-center'><Link to={'/blog'}   className='text-[16px] flex items-center gap-[10px]   font-medium font-inter text-main'>Blog     <MdKeyboardArrowDown /></Link> </li>
              <li className='flex gap-[10px] items-center'><Link to={'/'}   className='text-[16px] flex items-center gap-[10px]   font-medium font-inter text-main'>Page <MdKeyboardArrowDown /></Link> </li>
              <li className='flex gap-[10px] items-center'><Link to={'/ContactPage'}   className='text-[16px] flex items-center gap-[10px]   font-medium font-inter text-main'>Contact <MdKeyboardArrowDown /></Link>   </li>
            </ul>
          </div>
{/* ----------------- nav search + button */}
          <div className='w-[443px] flex gap-[10px] items-center'>
            <input className='w-[293px] py-[18px] pl-[20px] text-[16px] font-medium font-inter text-main border outline-none
            0 border-[#1923353c] rounded-[5px]' type="email" placeholder='Search' />
            <button className='w-[60px] h-[60px] bg-[#F3F6FB] hover:bg-[#25C6DA] text-[#25C6DA] hover:text-white  flex justify-center items-center rounded-[5px]'><IoSearch className='text-[20px] ' /></button>

          <button className='w-[60px] h-[60px] bg-[#F3F6FB] hover:bg-[#25C6DA] text-[#25C6DA] hover:text-white  rounded-[5px] flex justify-center items-center'><IoCartOutline className='text-[20px] ' /></button>
          </div>


        </div>
      </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Navbr