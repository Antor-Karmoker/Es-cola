import React from 'react'
import CommonHead from './common/CommonHead'
import BlogCommon from './common/BlogCommon'
import vloimg from '../assets/images/vloimg.png'

const Blog = () => {
  return (
    <>
    
    
    <section id='blog' className=' relative pb-[120px] '>
      <div className=' absolute top-[-79px] right-[200px]'><img src={vloimg} alt="vloimg" /></div>
        <div className="container">
            <div className='flex justify-center'><CommonHead commonp={'Blog & Artical '} /></div>
            <div id='blog-row'>
                <div className='flex justify-center'>
                <div className='w-[617px] flex justify-center '><h2 className='text-[42px] text-center font-bold font-inter text-main'>Business strategy is the plan and actions</h2></div> 
                </div>
                <div className='flex justify-center mt-[51px] items-center gap-[30px]'>
                <BlogCommon />
                <BlogCommon />
                <BlogCommon />
                </div>
            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Blog