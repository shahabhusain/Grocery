import React from 'react'

const Owner = () => {
  return (
    <div className='bg-3 opacity-[0.9]'>
       <div className=' flex flex-col items-center justify-center h-screen gap-2 md:mx-0 mx-4 '>
       <button className=' py-2 px-6 bg-[#008B47] text-white text-[20px] rounded-full'>Join the movement</button>
        <h1 className=' text-[35px] text-white'>Become an Owner</h1>
        <p className='font1 md:text-[25px] text-[20px] font-[500] text-white max-w-[655px] text-center'>Ownership in The Front Porch is more than just a financial investment it’s a commitment to our community’s future YOU can become a member-owner. </p>
        <p className=' md:text-[20px] text-[17px] font-[400] font1 text-white mt-6 md:text-start text-center'> Your membership means more than discounts</p>
       </div>
    </div>
  )
}

export default Owner