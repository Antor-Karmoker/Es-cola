import React from 'react'
import CartCommon from '../components/common/CartCommon'
import logo1 from '../assets/images/cart1.png'
import logo2 from '../assets/images/cart2.png'
import logo3 from '../assets/images/cart3.png'
import logo4 from '../assets/images/cart4.png'
import logo from '../assets/images/Illustration.png'
import contimg from '../assets/images/getimg.png'
import CommonHead from '../components/common/CommonHead'
import breadcrum from '../components/common/Breadcrum'
import Contact from '../components/Contact'
import Email from '../components/Email'
import Cart from '../components/Cart'
import Services from '../components/Services'
import Breadcrum from '../components/common/Breadcrum'


const Service = () => {
  return (
    <>
    
<section>
  <Breadcrum breadContent={'services'} />
  <div className='container'></div>
</section>
  <Cart />
  <Services />
  <Email />
  <Contact />
    

    
    </>
  )
}

export default Service