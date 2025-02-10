import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const [open, setOpen] = useState(1)
  return (
    <div className=' py-1 bg-white sticky top-0 z-[1000]'>
      <div className='flex items-center justify-between w-[90%] mx-auto'>
      <img className=' cursor-pointer' src={logo} alt="" />
        <div className=' flex items-center gap-6'>
            <ul className=' flex items-center gap-6'>
                <Link to="/" onClick={() =>setOpen(1)} className={`text-[22px] font-[500]  cursor-pointer ${open === 1 ? " text-[#008B47]" : "text-[#000]"}`}>Home</Link>
                <Link to="/about" onClick={() =>setOpen(2)} className={`text-[22px] font-[500]  cursor-pointer ${open === 2 ? " text-[#008B47]" : "text-[#000]"}`}>About</Link>
                <Link to="/join" onClick={() =>setOpen(3)} className={`text-[22px] font-[500]  cursor-pointer ${open === 3 ? " text-[#008B47]" : "text-[#000]"}`}>Join Us</Link>
                <Link to="/community" onClick={() =>setOpen(4)} className={`text-[22px] font-[500]  cursor-pointer ${open === 4 ? " text-[#008B47]" : "text-[#000]"}`}>Community Partners</Link>
                <Link to="/member" onClick={() =>setOpen(5)} className={`text-[22px] font-[500]  cursor-pointer ${open === 5 ? " text-[#008B47]" : "text-[#000]"}`}>Members</Link>
            </ul>
            <button className=' py-2 px-6 rounded-md bg-[#008B47] text-white text-[22px] cursor-pointer'>Account</button>
        </div>
      </div>
    </div>
  )
}

export default Header