import React from 'react'
import image from '../../assets/plan.png'
const Plan = () => {
  return (
    <div className='bg-[#008B47] py-6 md:relative  h-[668px] mt-[112px]'>
        <div className=' flex flex-col md:flex-row items-center justify-between gap-6 '>
         <div className=' flex flex-col gap-3 ml-12 max-w-[655px] md:mt-[252px]'>
         <h1 className='text-[40px] text-white'>The Plan</h1>
           <p className=' font1 text-[22px] text-white font-[400]'>The Front Porch Grocery Cooperative will be a 10,000 sq ft full service grocery store and community space.</p>
           <p className=' font1 text-[22px] text-white font-[400] mt-4'>A room featuring a demonstration kitchen, tables, and chairs and access to the internet that you or your organization may rent to host a meeting, enjoy a meal, or work together.</p>
         </div>
         <img className=' md:absolute right-0  md:w-[600px] md:h-[777px] ' src={image} alt="" />
        </div>
    </div>
  )
}

export default Plan