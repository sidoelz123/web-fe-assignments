import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}) {
  const location = useLocation();
  return (
    <>
      <Navbar route={location.pathname}/>
        {children}
      <Footer route={location.pathname}/>
    </>
  )
}

export default Layout