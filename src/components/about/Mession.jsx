import React from 'react'
import plan1 from '../../assets/plan1.png'
const Mession = () => {
  return (
    <div className=' flex items-center justify-between gap-12'>
         <div className=' flex flex-col gap-2 ml-12'>
         <h1 className=' text-[35px] text-black'>Our Mission</h1>
         <p className=' text-[22px] font1 font-[400] max-w-[655px]'>Our mission is to establish and sustain a grocery store that offers At The Front Porch, our mission is to establish and sustain a grocery store that offers quality products and services while creating jobs and empowerment within the community.</p>
         </div>
         <img src={plan1} alt="" className=' h-[800px]' />
    </div>
  )
}

export default Mession