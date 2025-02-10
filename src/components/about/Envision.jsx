import React from 'react'
import img1 from '../../assets/about1.png'
import img2 from '../../assets/about2.png'
import img3 from '../../assets/about3.png'
const Envision = () => {
  return (
    <div className=' bg-[#EFE0CC] flex items-center justify-between relative h-[633px]'>
        <div className=' flex flex-col gap-12 absolute -top-48 w-[35%] ml-12'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
        <div className=' flex flex-col gap-4 ml-[744px]'>
            <h1 className=' text-[44px] text-black'>A community-owned grocery store providing what you want and need.</h1>
            {/* <p className=' text-[22px] font1 font-[400] text-black'>Meets the needs of Warrenton residents, offering a diverse selection of products, from everyday essentials to specialty items that reflect the tastes and preferences of our community.</p>
            <p className=' text-[22px] font1 font-[400] text-black'>Our store will be a place where everyone feels welcome, where the food is fresh, and where the community is at the heart of everything we do.</p> */}
        </div>
    </div>
  )
}

export default Envision