import React from 'react'
import logo from "../HeroBanner/heroImage/logoHero.png"
import HeroProfile from './heroProfile/HeroProfile'
import NavBarHero from './NavBarHero/NavBarHero'
import PostulerHero from './PostulerHero/PostulerHero'
import "../HeroBanner/HeroBanner.css"
function HeroBanner() {
  return (
    <div className='hero'>
        {/**logo */}
        <div className=' container text-center ' >
            <img src={logo} className="image" />
        </div>
        
        {/**profile */}
        <div className="profile3">
            <HeroProfile/>
        </div>

        {/**navbar */}
        <div className=' px-lg-4 pb-4'>
            <NavBarHero/>
        </div>
        
        {/**postuler */}
        <div className=' px-lg-4'>
            <PostulerHero/>
        </div>
    </div>
  )
}

export default HeroBanner