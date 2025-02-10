import React from 'react'
const Hero = () => {
  return (
    <div className=' bg-1'>
        <div className='  flex flex-col gap-y-3 items-center justify-center pt-[352px]'>
            <h1 className=' text-[62px] font-[400] text-white'>Coming Soon</h1>
            <p className=' text-[22px] font-[400] text-white max-w-[755px] text-center font1'>Your local, community & worker-owned grocery store.  Located inside Mag’s Marketplace at  307 E Macon Street, Warrenton NC 27589</p>
              <div className=' flex items-center gap-3'>
              <button className=' py-2 px-5 rounded-md bg-[#fff] text-[#008B47] font1 cursor-pointer'>Learn More</button>
              <button className=' py-2 px-5 rounded-md bg-[#008B47] text-[#fff] font1 cursor-pointer'>Join Now</button>
              </div>
        </div>
    </div>
  )
}

export default Hero