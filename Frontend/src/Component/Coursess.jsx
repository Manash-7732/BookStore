import React, { useEffect,useState } from 'react';
import axios  from 'axios';
import Cards from './Cards';
import list from '../../public/list.json';

import {Link} from 'react-router-dom';


function Coursess() {
    
    const [Books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:4001/book");
                if (!response.ok) { // Check if the response is successful
                    throw new Error('Network response was not ok');
                }
                const data = await response.json(); // Parse the JSON data
                console.log(data);
                setBooks(data); // Update the state with the fetched data
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
    
        fetchBooks();
    }, []);

  return (
    <>
    
    <div className="max-w-screen-2xl mx-auto container md:px-20 px-4">
    <div className='mt-10 items-center text-center'>
   <h1 className='font-bold text-2xl md:text-3xl pt-20'>Unlock your potential with our expert-led courses<span className='text-pink-500'>-learn skills that matter today</span>!</h1>
   <p className='mt-10  text-xl'>Explore our diverse range of courses designed to enhance your knowledge and skills across various fields. Each course offers a comprehensive curriculum, guided by experienced instructors who are experts in their respective areas. Whether you're looking to advance your career, explore a new interest, or gain practical skills, our programs cater to all levels, from beginners to advanced learners. With flexible online options and engaging content, you can learn at your own pace and convenience of the era building</p>
   <div className='mt-8'>

   <Link to="/" className="inline-block">
   <button className= "px-6 py-3 rounded-md bg-pink-500 hover:text-white">Back</button>
   </Link>
   </div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 mt-10 p-3 gap-y-6' >
        {Books.map((item)=>(
             <Cards item={item} key={item.id}/>
        ))}
    </div>
    </div>
   
    </>
    
  )
}

export default Coursess