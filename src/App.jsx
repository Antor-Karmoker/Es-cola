import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import Service from './pages/Service'
import ContactPage from './pages/ContactPage'

const App = () => {

const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route >
    <Route path='/' element={<LayoutOne />}>
    <Route index element={<Home />} />
    <Route path='/service' element={<Service />} />
    <Route path='/ContactPage' element={<ContactPage />} />

    </Route>
  </Route>
))


  return (
    <>
    
    
    <RouterProvider router={myRoute} />
    
    
    
    </>
  )
}

export default App