import React from 'react'
import headphone from '../assets/Flex.svg' 
const FrequentlyAsked = () => {
  return (
    <div className='max-w-[1300px]  justify-center mx-auto'>

        <div className=' max-w-[1300px] mx-5 flex flex-col items-center '>
        <h1 className='text-2xl font-bold pb-10'>Frequently Asked <span className='text-Blue'>Questions</span></h1>

        <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex flex-col items-center gap-5'>
                <button className='text-Blue w-[12rem] rounded-lg shadow-md lightshadow2 px-5 py-3'>Eligibility</button>
                <button className='px-5 w-[12rem] py-3 rounded-lg border-black border-[1px] '>How to Use?</button>
                <button className='px-5 w-[12rem] py-3 rounded-lg border-black border-[1px] '>Terms & Conditions</button>
            </div>

            <div className='flex flex-col mt-5 gap-7 '>
                <h3 className='text-Blue'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</h3>
                <h3>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                suitable for individuals from any field of work.</h3>
                <h3>What is the minimum system configuration required?</h3>
            </div>
        </div>
        </div>

    

        <div className='max-w-[1300px] md:h-[13.5rem]  flex  flex-col md:flex-row  rounded-xl mt-10 mx-5 bg-Blue md:justify-between gap-10 relative items-center clip-img-path'>
            <div className=' '>
            <div className=' absolute h-[23rem] w-[23rem] rounded-full bg-circle1 -bottom-[19rem] right-[16rem] z-20'></div>
            <div className=' absolute h-[32rem] w-[32rem] rounded-full bg-circle2 -bottom-[24rem] right-[11.5rem] z-10'></div>
            <div className=' absolute h-[39.5rem] w-[39.5rem] rounded-full bg-circle3 -bottom-[28rem] right-[8rem] -z-10'></div>

            </div>
            {/* box */}
            <div className='text-white flex flex-col md:flex-row gap-10 mx-10 z-50'>
                <img width={70} src={headphone} alt="" />
                <h1 className='text-3xl'>Want to delve deeper into the program? <p className='text-lg'>Share your details to receive expert insights from our program team!</p> </h1>
                
            </div>
            <div className='z-50 bg-white text-Blue  px-3 mx-10  py-2 rounded-md mb-10' >
                <button >Get in touch</button>
            </div>
        </div>  
    </div>
  )
}

export default FrequentlyAsked
