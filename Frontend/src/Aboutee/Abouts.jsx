import React from 'react'
import About from '../Component/About'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'

function Abouts() {
  return (
    <>
    <Nav/>
    <div className='min-h-screen'>
         <About/>
    </div>
    <Footer/>

    </>
  )
}

export default Abouts