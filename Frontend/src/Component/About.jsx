import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto px-6 py-12  bg-white text-gray-800 rounded-lg shadow-lg mb-3 dark:bg-slate-900 dark:text-white mt-[68px]">
        <h1 className="text-4xl font-extrabold text-center mb-8">About Us</h1>
        
        <div className="text-lg leading-relaxed space-y-6">
          <p className="text-xl font-light text-center mb-6">
            Welcome to <span className="font-bold">Book Haven</span> – your gateway to a world of literary wonders! We believe in the power of stories to inspire, educate, and bring joy. Whether you're a seasoned reader or just starting out, we've got something for everyone.
          </p>
          
          <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
          <p>
            Our mission is simple: to ignite a passion for reading. We aim to make books accessible, fun, and relevant for readers of all ages and interests. From fiction to non-fiction, self-help to fantasy, our diverse collection has been carefully curated to help you embark on new adventures.
          </p>
          
          <h2 className="text-3xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🌟 Handpicked books from a wide range of genres</li>
            <li>⭐ Authentic user reviews to guide your next read</li>
            <li>📚 Exclusive author interviews and book releases</li>
            <li>💬 A vibrant community of book lovers to share and discuss</li>
          </ul>
          
          <h2 className="text-3xl font-semibold mb-3">Join the Journey</h2>
          <p>
            We invite you to become a part of our growing community. Discover your next favorite book, share your thoughts with fellow readers, and connect with authors in ways you’ve never experienced before. At Book Haven, every story matters.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link to="/explore">
            <button className="px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold transition-transform transform hover:scale-105">
              Explore Our Collection
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
