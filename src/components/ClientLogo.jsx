import React from 'react'
import logo from '../assets/images/Client Logo.png'
import { Link } from 'react-router'

const ClientLogo = () => {
  return (
    <>
    
    
    
    <section id='client' className='pb-[265px]'>
        <div className="container">
            <Link className='flex justify-center'><img src={logo} alt="client-logo" /></Link>
        </div>
    </section>
    
    
    
    </>
  )
}

export default ClientLogo