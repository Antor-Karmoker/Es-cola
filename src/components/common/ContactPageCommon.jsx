import React from 'react'

const ContactPageCommon = ({contactLogo , contactH2 , contactP , contactP2}) => {
  return (
    <>
    
    
    <div className='w-[300px] h-[255px] flex flex-col  items-center  bg-[#E3E3E3] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]'>
        <div className='w-[80px] h-[80px] bg-[#2F57EF] text-[20px] text-white flex justify-center items-center rounded-b-[20px]'>{contactLogo}</div>
        <div className='pt-[31px] pb-[21px]'>
        <h2 className='text-[21px] font-bold font-inter text-main'>{contactH2}</h2>

        </div>
        <div>
            <p className='text-[16px] font-normal font-inter text-main'>{contactP}</p>
            <p className='text-[16px] font-normal font-inter text-main'>{contactP2}</p>
        </div>

    </div>
    
    
    
    </>
  )
}

export default ContactPageCommon