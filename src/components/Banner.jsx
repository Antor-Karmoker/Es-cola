import React from 'react'
import bannerimg from '../assets/images/bannerimg.png'
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.png'
import clip from '../assets/images/Clip path.png'


const Banner = () => {
  return (
    <>
    <section style={{ background: `URL(${bannerimg})`, backgroundRepeat: `no-repeat`,  backgroundSize: `cover`,}} id='banner'>
        <div className="container">
            <div id='banner-row' className=''>
                <div className='flex  items-center gap-[113px]'>
                    <div className='w-[857px] pt-[65px] pb-[78px]'><h2 className='text-[75px] font-bold font-inter text-main'>Expand Your Horizons through <span className='text-[#2F57EF]'>Education</span></h2></div>
                    <div>
                        <p className='text-[21px] font-normal font-inter text-main'>Education for a Better Tomorrow.</p>
                        <button className='w-[175px] text-[15px] font-medium font-inter text-main hover:bg-gray-100 border border-[#25C6DA] rounded-[5px] mt-[24px] py-[24px] px-[45px]'>Contact us</button>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-[30px] '>
                    <div className=''><img src={banner1} alt="banner-img" /></div>
                    <div className='w-[630px] h-[421px] bg-[#D9D9D9]'></div>
                    <div className=' relative z-10'><img src={banner2} alt="banner-img" /></div>
                    <div className=' absolute top-[506px] right-[352px]'><img src={clip}  alt="clip" /></div>
                </div>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Banner