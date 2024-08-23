import React from 'react'
import "../heroProfile/Profile.css"
import profile from "./image/profile.png"
function HeroProfile() {
  return (
    <div className='profile d-inline-flex p-3 '>
      <div className=' mx-3 mt-1'>
        <img src={profile}/>
      </div>
      
      <div>
        {/**nom */}
        <h3 className=' fw-semibold nom'>Meritt Thomas</h3>
        {/**role */}
        <span>instructeur</span>
      </div>
    </div>
  )
}

export default HeroProfile