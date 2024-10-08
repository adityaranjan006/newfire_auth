import React from 'react'
import { useLocation } from 'react-router-dom'
const Profile = () => {
  const userNumber = useLocation();
  const phoneNum=userNumber.state;
  return (
    <div className='bg-gradient-to-r from-purple-400 via-yellow-200 to-red-600 h-screen'>
      <div className="text-6xl justify-center justify-items-center">
      <h2>Hello {phoneNum}</h2>
      </div>
      
    </div>
  )
}

export default Profile
