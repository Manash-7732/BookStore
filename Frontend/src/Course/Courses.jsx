import React from 'react'
import Coursess from '../Component/Coursess'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'

function Courses() {
  return (
    <>
    <Nav/>
    <div className=" min-h-screen ">
    <Coursess/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses