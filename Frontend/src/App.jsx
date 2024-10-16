import React from 'react'
import Ghar from './Ghar/Ghar'
import { Route, Router, Routes } from 'react-router-dom'
import Courses from './Course/Courses'
import Signup from './Component/Signup'
import Contact from './ContactUs/Contact'




function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<Ghar/>} />
     <Route path='/courses' element={<Courses/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/contactus' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App