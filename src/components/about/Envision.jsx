import React from 'react'
import img1 from '../../assets/about1.png'
import img2 from '../../assets/about2.png'
import img3 from '../../assets/about3.png'
const Envision = () => {
  return (
    <div className=' md:bg-[#EFE0CC] flex flex-col-reverse md:mx-0 mx-4 md:flex-row mt-[223px] items-center justify-between md:relative h-[633px]'>
        <div className=' flex flex-col gap-12 md:absolute md:-top-48 md:w-[35%] md:ml-12 md:mt-0 mt-12'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
        <div className=' flex flex-col gap-4 md:ml-[744px]'>
            <h1 className=' md:text-[44px] text-[30px] text-black '>A community-owned grocery store providing what you want and need.</h1>
            {/* <p className=' text-[22px] font1 font-[400] text-black'>Meets the needs of Warrenton residents, offering a diverse selection of products, from everyday essentials to specialty items that reflect the tastes and preferences of our community.</p>
            <p className=' text-[22px] font1 font-[400] text-black'>Our store will be a place where everyone feels welcome, where the food is fresh, and where the community is at the heart of everything we do.</p> */}
        </div>
    </div>
  )
}

export default Envision