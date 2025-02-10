import React from 'react'
import MemberOwner from '../components/Members/MemberOwner'
import Frequently from '../components/Members/Frequently'
import Contact from '../components/Members/Contact'
import Excite from '../components/home/Excite'

const Members = () => {
  return (
    <div>
        <MemberOwner />
        <Frequently />
        <Contact />
        <Excite />
    </div>
  )
}

export default Members