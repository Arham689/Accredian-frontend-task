import React from 'react'
import heroimg from '../assets/heroimg.png'
import dolarbill from '../assets/dolaarbill.png'

const HeroSection = () => {
    return (
        <>
        <div className='max-w-[1300px]   mx-auto md:flex justify-center shadow-lg lightshadow rounded-[30px] relative clip-img-path'>
            <div className='flex-1 flex flex-col justify-center p-5 '>
                <div className='text-7xl font-bold pl-10 pb-10'>Let’s Learn <div className=''>& Earn</div></div>

                <div className='mt-4 text-3xl pl-10 '>
                    Get a chance to win
                    <div className='pt-2'>
                        up-to  <span className='text-Blue text-4xl font-bold'>Rs. 15,000</span>

                    </div>
                </div>

                <button className='rounded-lg bg-Blue w-[100px] text-white p-3 ml-10 mt-5'>
                    Refer Now
                </button>


            </div>
            <div className='pr-10 '>
                <img   src={heroimg} alt="heroimg" className='w-[37rem]'/>
            </div>

                <img src={dolarbill} width={100} alt="bill" className=' absolute right-[1rem] hidden md:block' />
                <img src={dolarbill} width={100} alt="bill" className=' absolute bottom-[3.5rem] left-[42rem] scale-150 hidden md:block'/>
                <img src={dolarbill} width={100} alt="bill" className=' absolute left-4 rotate-[100deg] hidden md:block' />
                <img src={dolarbill} width={100} alt="bill" className=' absolute right-7 top-[15rem] rotate-[100deg] -z-10 ' />
                {/* <img src={dolarbill} width={100} alt="bill" className=' absolute left-[51rem] rotate-180 -z-10' /> */}

        </div>

        <div className='p-10 mx-auto font-bold max-w-[1300px] flex justify-center'>How Do I <span className='text-Blue'> &nbsp; Refer?</span></div>

        </>
    );
};

export default HeroSection;
