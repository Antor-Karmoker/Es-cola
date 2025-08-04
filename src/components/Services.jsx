import React from 'react'
import CommonHead from './common/CommonHead'
import ServiceCommon from './common/ServiceCommon'

const Services = () => {
  return (
    <>
    
    <section id='service' className='py-[120px]'>
        <div className="container">
            <CommonHead commonp={'Services we’re offering'} />
            <div id='service-row'>
                <div className='w-[434px]'><h2 className='text-[42px] font-bold font-inter text-main'>Navigating your path to success</h2></div>


            </div>
        </div>
        <div className='flex justify-around items-center gap-[30px]'>

                <ServiceCommon />
                <ServiceCommon />
                <ServiceCommon />
                <ServiceCommon />

        </div>
    </section>
    
    
    
    </>
  )
}

export default Services