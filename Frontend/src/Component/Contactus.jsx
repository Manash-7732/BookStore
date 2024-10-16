import React from 'react';
import { useForm } from 'react-hook-form';

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <>
   <div className=''>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 mt-[72px]">
      <div className="bg-white dark:bg-slate-900 dark:text-white p-8 rounded-md shadow-lg w-full max-w-lg ">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              })}
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          </div>

          {/* Subject field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="Enter the subject"
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && <span className="text-red-600 text-sm">{errors.subject.message}</span>}
          </div>

          {/* Message field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              rows="5"
              placeholder="Enter your message"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-pink-600 dark:hover:bg-pink-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}

export default ContactUs;
