import React from 'react'
import "./Postuler.css"
import bg from "./image/bg-postuler.png"
function PostulerHero() {
  return (
    <div>
      <div className='postuler' style={{backgroundImage:`url(${bg})`}}>
        <span >
        <p className='textPostule fw-bold'>
        Postulez <br/> 
        maintenant<br/>
        pour devenir<br/>
        moniteur <br/>
        <span>d'auto-école</span>
        </p>
        </span>
        <div className=' align-self-center '>
          <div className='explore'>
            <a className=' fw-semibold'>Explorez maintenant</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostulerHero