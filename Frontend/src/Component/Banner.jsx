import React from 'react'
import books from '../../public/books.jpg'

function Banner() {
  return (
   <>
   <div className='max-w-screen-2xl mx-auto container md:px-20 px-4 container flex flex-col md:flex-row'>
    <div className='w-full md:w-1/2 mt-20 md:mt:32 order-2 md:order1'>
    <div className='space-y-12'>
        <h1 className='text-4xl font-bold mt-10'>Dive into stories that inspire, captivate, and transform,<span className='text-pink-500'> Your next favorite book is waiting</span>!</h1>
        <p className='text-xl  mt-10 font-bold'>Welcome to a world where every book opens doors to new adventures. Discover stories that will captivate your mind and inspire your soul. Dive into a collection curated for readers like you, where each page turns into an unforgettable journey.Let the magic of books guide you to new horizons. Your next great read is just a click away</p>
        </div >

        {/* Email and DiveIn Button will start  */}
        <div className='mt-20'>
        <div className='w-full mt-8'>
        <label className="input input-bordered flex items-center gap-2 dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input 
    type="text" 
    className="grow bg-white text-gray-900  dark:text-white  dark:placeholder-gray-400 p-2 rounded-md  " 
    placeholder="Email" />
</label>

        </div>
     <div className='mt-10'>
     <button className="btn btn-active btn-secondary px-6 py-3">Dive IN</button>
     </div>
     </div>
    </div>
    <div className=' md:w-1/2 order-1 md:order-2'>
    <div className='m-20 pt-10'>
      <img src={books} alt="books" className='' />
      </div>
    </div>
   </div>
   </>
  )
}

export default Banner