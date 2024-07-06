import React from 'react'

const Tabs = () => {
  return (
    <div className='text-2xl m-4 max-w-[1300px] flex list-none gap-5 md:gap-24 justify-center items-center h-[3rem] bg-lightBlue  mx-auto rounded-[100px]'>
        <li className=' relative text-Blue flex flex-row justify-center'>Refer <div className=' absolute w-1 h-1 rounded-full bg-Blue -bottom-1 '></div></li>
        <li>Benefits</li>
        <li>FAQs</li>
        <li>Support</li>
    </div>
  )
}

export default Tabs
