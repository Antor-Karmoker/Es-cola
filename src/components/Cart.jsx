import React from 'react'
import CartCommon from '../components/common/CartCommon'
import logo1 from '../assets/images/cart1.png'
import logo2 from '../assets/images/cart2.png'
import logo3 from '../assets/images/cart3.png'
import logo4 from '../assets/images/cart4.png'



const Cart = () => {
  return (
    <>
    
    
    
    
    <section id='cart' className='pt-[186px] pb-[120px]'>
        <div className="container">
            <div id='cart-row' className=' flex justify-between items-center'>
            <CartCommon cartimg={logo1} carth2={'Future Focus'} cartp={'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam '} />
            <CartCommon cartimg={logo2} carth2={'Smart Scholars'} cartp={'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam '} />
            <CartCommon cartimg={logo3} carth2={'Knowledge Hub'} cartp={'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam '} />
            <CartCommon cartimg={logo4} carth2={' Learning Pathways'} cartp={'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam '} />

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Cart