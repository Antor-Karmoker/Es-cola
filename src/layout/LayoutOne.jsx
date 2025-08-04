import React from 'react'
import Header from '../components/Header'
import Navbr from '../components/Navbr'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const LayoutOne = () => {
  return (
    <>
    
    
    <Header />
    <Navbr />
    <Outlet />
    <Footer />
    
    
    
    
    </>
  )
}

export default LayoutOne