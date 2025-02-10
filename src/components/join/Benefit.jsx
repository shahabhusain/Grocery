import React from 'react'

const Benefit = () => {
  return (
    <div className='bg-[#5F84B6] md:pl-12 px-4 py-12 mt-32'>
        <h1 className=' md:text-[40px] text-[35px] font-[400] text-white'>Membership Benefits</h1>

        <div className=' flex flex-col gap-7 max-w-[766px] text-white md:mt-0 mt-12'>
            <li className=' md:text-[25px] text-[20px] font1 font-[400]'>Joining a movement to create a local business in Southeast Raleigh dedicated to providing access to healthy food.</li>
            <li className=' md:text-[25px] text-[20px] font1 font-[400]'> The right to vote in elections and run for a seat on the board of directors.</li>
            <li className=' md:text-[25px] text-[20px] font1 font-[400]'> Member specials</li>
            <li className=' md:text-[25px] text-[20px] font1 font-[400]'> Case lot discounts on special orders.</li>
            <li className=' md:text-[25px] text-[20px] font1 font-[400]'>Potential patronage refunds during profitable years.</li>
            <li className=' md:text-[25px] text-[20px] font1 font-[400]'>Member-owner discounts on classes or workshops held at Fertile Ground Food Cooperative.</li>
        </div>
    </div>
  )
}

export default Benefit