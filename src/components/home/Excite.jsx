import React from 'react'
import excite from '../../assets/excite.png'
const Excite = () => {
  return (
    <div className=' bg-[#EFE0CC] w-[95%] mx-auto flex flex-col md:flex-row items-center gap-12 justify-between py-12 md:px-12 px-6 mt-32'>
       <div className=' flex flex-col gap-6'>
       <h1 className=' text-[40px] text-black'>We invite you to be part of this exciting journey</h1>
       <p className=' text-[22px] font-[400] text-black font1'>You receive updates, special offers, and insider news as we prepare to open our doors. You’ll be the first to know about our progress, events, and opportunities to get involved.</p>
       <div className=' bg-white py-3 px-3 rounded-md flex items-center'>
        <input type="text" placeholder='enter your email address' className=' bg-transparent py-3 px-6 font1  w-full' />
        <button className=' bg-black py-3 px-6 text-white md:w-[30%]'>Get Start</button>
       </div>
       </div>
       <img src={excite} alt="" />
    </div>
  )
}

export default Excite