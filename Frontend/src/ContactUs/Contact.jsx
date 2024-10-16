import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import Contactus from '../Component/Contactus'

function Contact() {
  return (
    <>
    <div>
   <Nav></Nav>
   </div>
   <div className='min-h-screen'>
    <Contactus/>
   </div>
   <Footer/>
    </>
  )
}

export default Contact