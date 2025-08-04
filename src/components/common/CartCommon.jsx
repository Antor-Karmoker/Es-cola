import React from 'react'
import { Link } from 'react-router'
import logo from '../../assets/images/cart1.png'


const CartCommon = ({cartimg , carth2 , cartp}) => {
  return (
    <>
    
    
    <div>
        <div className='w-[300px] h-[298px] bg-[#fff] text-center pt-[30px] pb-[40px] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]'>
           
           {/* ------------------ img */}
            <Link className='flex justify-center' ><img src={cartimg} alt="logo" /></Link>
           {/* ------------------- h2 */}
            <div className='pt-[20px] pb-[15px]'><h2 className='text-[21px] font-bold font-inter text-main'>{carth2}</h2></div>
           
           {/* ----------------------- p */}
            <div className='flex justify-center'>
            <div className='w-[240px]'><p className=' text-[17px] font-normal font-inter  text-main'>{cartp}</p> </div>

            </div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default CartCommon