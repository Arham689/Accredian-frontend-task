import React from 'react'
import hat from '../assets/hat.svg'
import blackarrow from '../assets/blackarrow.svg'
import whitearrow from '../assets/whitearrow.svg'
const Table = () => {
  return (
    <>
        <div className='max-w-[1300px] flex md:flex-row flex-col items-center md:justify-center mx-auto mt-10 text-3xl'>What Are The Referral <span className='text-Blue font-bold'> &nbsp; Benefits?</span></div>
             
        <div className=' max-w-[1300px] mx-auto mt-10 md:flex md:flex-row flex flex-col items-center md:justify-center gap-5'>



            <div className='rounded-2xl lightshadow w-[17rem]'>
                <ul className=''>
                    <li className='bg-Blue text-white rounded-t-lg p-3 flex justify-between '>ALL PROGRAMS <img src={whitearrow} alt="" /></li>
                    <li className=' px-4 py-3 '>  <div className='flex justify-between'>Product Management <img src={blackarrow} alt="" /></div> <div className='h-[1px] bg-black mt-3 rounded-3xl'></div></li>
                    <li className=' px-4 py-3 '>  <div className='flex justify-between'>Strategy & Leadership<img src={blackarrow} alt="" /></div> <div className='h-[1px] bg-black mt-3 rounded-3xl'></div></li>
                    <li className=' px-4 py-3 '>  <div className='flex justify-between'>Business Management<img src={blackarrow} alt="" /></div> <div className='h-[1px] bg-black mt-3 rounded-3xl'></div></li>
                    <li className=' px-4 py-3 '>  <div className='flex justify-between'>Fintech <img src={blackarrow} alt="" /></div> <div className='h-[1px] bg-black mt-3 rounded-3xl'></div></li>
                    <li className=' px-4 py-3 '>  <div className='flex justify-between'>Senior Management <img src={blackarrow} alt="" /></div> <div className='h-[1px] bg-black mt-3 rounded-3xl'></div></li>
                    <li className=' px-4 py-3 '>  <div className='flex justify-between'>Data Science <img src={blackarrow} alt="" /></div> <div className='h-[1px] bg-black mt-3 rounded-3xl'></div></li>
                    <li className=' px-4 py-3 '>  <div className='flex justify-between'>Digital Transformation <img src={blackarrow} alt="" /></div> <div className='h-[1px] bg-black mt-3 rounded-3xl'></div></li>
                    <li className=' px-4 py-3 '>  <div className='flex justify-between'>Business Analytics <img src={blackarrow} alt="" /></div></li>
                    
                </ul>
            </div>

            {/* table  */}

        <table className=' shadow-sm  '>
            <tr className=' '>
                <th className='text-darkBlue border-r-2 bg-lightBlue rounded-tl-2xl w-[33rem] h-[3rem]'>Programs</th>
                <th className=' border-r-2 text-darkBlue bg-lightBlue w-[14rem]'>Referrer Bonus</th>
                <th className='text-darkBlue bg-lightBlue rounded-tr-2xl w-[14rem]'>Referee Bonus</th>
            </tr>
            <tr>
                <td className='  md:flex gap-3 p-5 '> <img src={hat} alt="" className=' hidden md:block ' /> <p>Professional Certificate Program in Product Management</p> </td>
                <td className='  border-l-2 border-r-2 p-6'>₹ 7,000</td>
                <td className='p-5'>₹ 9,000</td>
            </tr>
            <tr>
                <td className='  flex gap-3 p-5'> <img src={hat} alt="" className=' hidden md:block '/> <p>PG Certificate Program in Strategic Product Management</p> </td>
                <td className='  border-l-2 border-r-2 p-6'>₹ 7,000</td>
                <td className='p-5'>₹ 9,000</td>
            </tr>
            <tr>
                <td className='  flex gap-3 p-5'> <img src={hat} alt="" className=' hidden md:block '/> <p>Professional Certificate Program in Product Management</p> </td>
                <td className='  border-l-2 border-r-2 p-6'>₹ 10,000</td>
                <td className='p-5'>₹ 9,000</td>
            </tr>
            <tr>
                <td className='  flex gap-3 p-5'> <img src={hat} alt="" className=' hidden md:block '/> <p>Professional Certificate Program in Product Management</p> </td>
                <td className='  border-l-2 border-r-2 p-6'>₹ 10,000</td>
                <td className='p-5'>₹ 9,000</td>
            </tr>
            <tr>
                <td className='  flex gap-3 p-5'> <img src={hat} alt="" className=' hidden md:block '/> <p>Professional Certificate Program in Product Management</p> </td>
                <td className='  border-l-2 border-r-2 p-6'>₹ 10,000</td>
                <td className='p-5'>₹ 9,000</td>
            </tr>
            <tr>
                <td className='  flex gap-3 p-5'> <img src={hat} alt="" className=' hidden md:block '/> <p>Professional Certificate Program in Product Management</p> </td>
                <td className='  border-l-2 border-r-2 p-6'>₹ 10,000</td>
                <td className='p-5'>₹ 9,000</td>
            </tr>
            <tr>
                <td className='  flex gap-3 p-5'> <img src={hat} alt="" className=' hidden md:block '/> <p>Professional Certificate Program in Product Management</p> </td>
                <td className='  border-l-2 border-r-2 p-6'>₹ 10,000</td>
                <td className='p-5'>₹ 9,000</td>
            </tr>
            
           
    </table>
        </div>
    </>
  )
}

export default Table
