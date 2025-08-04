import React from 'react'
import CommonHead from './common/CommonHead'
import logo from '../assets/images/Illustration.png'

const Contact = () => {
  return (
    <>
    
    
    <section id='conatct' className='pt-[123px] pb-[120px]'>
        <div className="container">
            <div id='contact-row' className='flex justify-around'>
                <div><img src={logo} alt="contact-img" /></div>
                <div className='w-[630px]'>

            <CommonHead commonp={'GET IN TOUCH'} />
                <div><h2 className='text-[42px] font-bold font-inter text-main'>Bringing your <span className='text-[#246BFD]'>vision</span> to life</h2></div>
              <div className='flex gap-[46px]'>
                <input className='w-[301px] border-[#E3E3E3] rounded-[5px] py-[22px] pl-[20px] border text-[17px] font-inter font-normal text-main ' type="text" placeholder='Your Name' />
                <input className='w-[301px] border-[#E3E3E3] rounded-[5px] py-[22px] pl-[20px] border text-[17px] font-inter font-normal text-main ' type="text" placeholder='Your Email' />
              </div>
                 <div className='flex gap-[46px] pt-[20px]'>
                <input className='w-[301px] border-[#E3E3E3] rounded-[5px] py-[22px] pl-[20px] border text-[17px] font-inter font-normal text-main ' type="text" placeholder='Phone Number' />
                <input className='w-[301px] border-[#E3E3E3] rounded-[5px] py-[22px] pl-[20px] border text-[17px] font-inter font-normal text-main ' type="text" placeholder='Subject' />
              </div>
                 <div className=''>
                    <textarea className='w-[630px] border-[#E3E3E3] rounded-[5px] py-[22px] pl-[20px] border text-[17px] mt-[20px] mb-[30px] font-inter font-normal text-main' name="Message" id="dfghdfhgdh">Message</textarea>
            
              </div>
              <button className='w-[630px] py-[21px] bg-[#2F57EF] rounded-[5px] text-[17px] font-normal font-inter text-[#ffff]'>submit now</button>
              
              
              
              
              
                </div>

            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Contact