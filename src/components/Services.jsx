import React from 'react'
import CommonHead from './common/CommonHead'
import ServiceCommon from './common/ServiceCommon'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


const Services = () => {

// --------------- slider

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: <FaArrowLeft className='text-[15px]' /> ,
    nextArrow: <FaArrowRight className='text-[15px]'/>,
  };

  return (
    <>
    
    <section id='service' className='py-[120px]'>
        <div className="container">
            <CommonHead commonp={'Services we’re offering'} />
            <div id='service-row'>
                <div className='w-[434px] pb-[40px]'><h2 className='text-[42px] font-bold font-inter text-main'>Navigating your path to success</h2></div>
            </div>

        </div>

      <Slider {...settings}>
        <div>
          <ServiceCommon />
        </div>
        <div>
          <ServiceCommon />
        </div>
        <div>
         <ServiceCommon />
        </div>
        <div>
          <ServiceCommon />
        </div>
                <div>
          <ServiceCommon />
        </div>
        <div>
          <ServiceCommon />
        </div>
        <div>
         <ServiceCommon />
        </div>
        <div>
          <ServiceCommon />
        </div>
      </Slider>
    </section>
    
    
    
    </>
  )
}

export default Services