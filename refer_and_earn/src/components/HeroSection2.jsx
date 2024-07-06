import React from 'react'
import hero2 from '../assets/hero2.png'
import addfri from '../assets/Add friend.svg'
import clip from '../assets/Layer 10.svg'
import refer from '../assets/Refer.svg'
import Refernow from './Refernow'
const HeroSection2 = () => {
  return (

    <div className=' max-w-[1300px] mx-auto md:flex flex  md:flex-row flex-col gap-10 md:gap-0   custom-padding  relative justify-around'>

        <div className=' absolute -z-10 hidden md:block -top-1 md:scale-100 scale-150  rotate-0 '>
            <img  src={hero2} alt="" />

        </div>
      <div className=' flex flex-col  items-center '>
            <img src={addfri} className='custom-width '  alt="add" />

            <div className='flex flex-col items-center mt-5'>

                <p>Submit referrals easily via </p>  <p>our website’s referral</p>  <p>section.</p>
            </div>
      </div>
      <div className=' flex flex-col items-center '>
            <img src={clip} className='custom-width'  alt="add" />

            <div className='flex flex-col items-center mt-5'>

                <p>Earn rewards once your </p>  <p>referral joins an Accredian</p>  <p>program.</p>
            </div>
      </div>
      <div className=' flex flex-col items-center '>
            <img src={refer} className='custom-width'  alt="add" />

            <div className='flex flex-col items-center mt-5'>

                <p>Both parties receive a</p>  <p>bonus 30 days after</p>  <p>program enrollment.</p>
            </div>
      </div>

    </div>
  )
}

export default HeroSection2


