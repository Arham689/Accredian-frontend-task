import React from 'react'
import accredian_logo from '../assets/accredian_logo.png'
const NavBar = () => {
  return (
    <React.Fragment>
    <nav className='h-[80px] max-w-[1300px] mx-auto flex items-center justify-center md:justify-between gap-x-2 mb-4'>
        <div className='flex gap-4'>
        <img width={125} height={40} src={accredian_logo} alt="logo" />
        <button className=' h-[40px] px-3 text-white bg-Blue rounded-[6px] '>Courses</button>

        </div>
        <ul className=' hidden gap-4  md:flex justify-center items-center'>
            <li>Refer & Earn</li>
            <li>Resources</li>
            <li>About usAbout us</li>
            <li>Login</li>
            <button className='h-[40px] w-[120px] text-white bg-Blue rounded-[6px]'>Try for free</button>
        </ul>
    </nav>


</React.Fragment>
  )
}

export default NavBar
