import React from 'react'
import Breadcrum from './common/Breadcrum'
import Popular from './Popular'
import Contact from './Contact'
import Activity from './Activity'
import { FaPlay } from 'react-icons/fa'
import Courses from './Courses'

const AboutPage = () => {
  return (
    <>
    
    
    
    <section id='About'>
        <Breadcrum breadContent={'About Us'} />
        <div className="container">
            <div id='About-row' className='pt-[120px]'>




    
    
    <Activity />
                {/* --------------- CTA Section */}
                      <div className="w-[1290px] h-[330px] mx-auto mt-[120px] flex rounded-md overflow-hidden">
                        {/*------------------ Left Side */}
                        <div className="bg-[#1E64F0] w-[809px] p-10 flex flex-col justify-center">
                          <h2 className="text-[42px] font-bold font-inter text-[#fff]">
                            We made passion our <br />
                            raw material
                          </h2>
                          <div className="flex items-center gap-4 mt-6">
                            <div className='w-[60px] h-[60px] rounded-full border border-[#F8BC26] flex justify-center items-center'>
                            <div className="w-[46px] h-[46px] bg-[#F8BC26] flex justify-center items-center rounded-full"><FaPlay /></div>
                
                            </div>
                            <div>
                              <p className="text-[17px] font-normal font-inter text-[#fff]">Call us now</p>
                              <h2 className="text-[21px] font-bold font-inter text-[#fff]">+44 7700 900217</h2>
                            </div>
                          </div>
                        </div>
                
                        {/*------------- Right Side - Placeholder for Image */}
                        <div className="w-[481px] bg-gray-300"></div>
                      </div>
                      <Courses />
                <Contact />
                </div>
        </div>
    </section>
    
    </>
  )
}

export default AboutPage