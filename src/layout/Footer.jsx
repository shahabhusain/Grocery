import React from 'react'
import logo from '../assets/logo1.png'
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoMdCall } from "react-icons/io";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='bg-black px-12 py-20 mt-32'>
         <div className=' flex justify-between '>
        <div className=' flex flex-col gap-6'>
            <img className=' w-[140px]' src={logo} alt="" />
            <p className=' text-[20px] font-[400] text-white max-w-[555px]'>The Front Porch Grocery Cooperative is more than just a store; it’s a community effort to create something lasting and meaningful.</p>
            <div className=' flex items-center gap-6'>
                <span className=' bg-[#008B47] text-white py-2 px-2 rounded-full'><FaInstagram /></span>
                <span className=' bg-[#008B47] text-white py-2 px-2 rounded-full'><FaFacebook /></span>
                <span className=' bg-[#008B47] text-white py-2 px-2 rounded-full'><FaTwitter /></span>
                <span className=' bg-[#008B47] text-white py-2 px-2 rounded-full'><FaGoogle /></span>
            </div>
        </div>

        <div className=' flex flex-col gap-6'>
            <h1 className=' text-[35px] font-[400] text-white'>Explore</h1>
            <p className=' text-[20px] font-[500] text-white font1'>Home</p>
            <p className=' text-[20px] font-[500] text-white font1'>About us</p>
            <p className=' text-[20px] font-[500] text-white font1'>Join us</p>
            <p className=' text-[20px] font-[500] text-white font1'>Community Partner</p>
            <p className=' text-[20px] font-[500] text-white font1'>Membership</p>
        </div>

        <div className=' flex flex-col gap-6'>
            <h1 className=' text-[35px] font-[400] text-white'>Contact</h1>
            <div className='flex items-center gap-2 text-white'><span className=' bg-[#008B47] text-white py-2 px-2 rounded-full '><IoMdCall /></span> +001 22 333 456</div>
            <div  className='flex items-center gap-2 text-white'><span className=' bg-[#008B47] text-white py-2 px-2 rounded-full'><IoMdMailUnread /></span> thefrontporche@gmail.com</div>
            <div  className='flex items-center gap-2 text-white max-w-[444px]'><span className=' bg-[#008B47] text-white py-2 px-2 rounded-full'><IoLocationSharp /></span> Located inside Mag’s Marketplace at  307 E Macon Street, Warrenton NC 27589</div>
        </div>
        
    </div>
    <p className='text-[20px] font-[500] text-[#ffffffa6] font1 text-center mt-12'>All Rights Reserved By THE FRONT PORCH 2025</p>
    </div>
  )
}

export default Footer
