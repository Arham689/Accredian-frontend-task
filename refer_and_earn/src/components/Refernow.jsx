
import React, { useState } from 'react';

const Refernow = () => { 
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrer_name: '',
    referrer_email: '',
    referee_name: '',
    referee_email: '',
    referee_number: '',
    course_name : '' ,
  });

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the backend)
    fetch('http://localhost:3000/referAF' , {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(response => response.text())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <button 
        className='text-white w-[15rem] h-[4rem] bg-Blue mx-auto rounded-xl flex justify-center items-center text-xl'
        onClick={handleClick}
      >
        Refer Now
      </button>
      {isFormOpen && 
      <div className='absolute flex justify-center bg-white w-screen h-screen items-center z-[100] '>
        <form onSubmit={handleSubmit}>
          <h2 className=' text-3xl'>Refer & Earn</h2>
          
          <div className='m-5'>
            <label htmlFor="referrer_name">Your Name : </label>
            <br />
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '
              type="text"
              id="referrer_name"
              name="referrer_name"
              value={formData.referrer_name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className = "m-5">
            <label htmlFor="referrer_email">Your Email :</label>
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '

              type="email"
              id="referrer_email"
              name="referrer_email"
              value={formData.referrer_email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className = "m-5">
            <label htmlFor="referee_name">Friend's Name :</label>
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '

              type="text"
              id="referee_name"
              name="referee_name"
              value={formData.referee_name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className = "m-5">
            <label htmlFor="referee_email">Friend's Email :</label>
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '

              type="email"
              id="referee_email"
              name="referee_email"
              value={formData.referee_email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className = "m-5">
            <label htmlFor="referee_number">Friend's Phone Number :</label>
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '

              type="tel"
              id="referee_number"
              name="referee_number"
              value={formData.referee_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className = "m-5">
            <label htmlFor='course_name'>Course Name :</label>
            <input
              className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '

              type="text"
              id="course_name"
              name="course_name"
              value={formData.course_name}
              onChange={handleChange}
              required
            />
          </div>
          
          <button className='text-white w-[15rem] h-[4rem] bg-Blue mx-auto rounded-xl flex justify-center items-center text-xl' type="submit">Submit</button>
        </form>
      </div>}
    </div>
  )
}

export default Refernow;
