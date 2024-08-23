import React from 'react'
import './Navbar.css'
import img1 from "./image/1.png"
import img2 from "./image/2.png"
import img3 from "./image/3.png"
import img4 from "./image/4.png"
import img5 from "./image/5.png"
import img6 from "./image/6.png"
import { Link } from 'react-router-dom';

function NavBarHero() {
  return (
    <div>
      <div className="vertical-navbar">
      <Link exact to="/dashboard/emplois" activeClassName="active">
        <span className='spanh3 justify-content-center'>
          <span className=' mx-2'>
          <img src={img1}/>
          </span>
          <span>
            Dashboard
          </span>
        </span>
      </Link>
      <Link exact to="/dashboard/planification" activeClassName="active">
        <span className='spanh3 justify-content-center'>
          <span className=' mx-2'>
          <img src={img2}/>
          </span>
          <span>
            Planification
          </span>
        </span>
      </Link>
      <Link exact to="/dashboard/etudiant" activeClassName="active">
        <span className='spanh3 justify-content-center'>
          <span className=' mx-2'>
          <img src={img3}/>
          </span>
          <span>
            Etudiant
          </span>
        </span>
      </Link>
      <Link exact to="/dashboard/message" activeClassName="active">
        <span className='spanh3 justify-content-center'>
          <span className=' mx-2'>
          <img src={img4}/>
          </span>
          <span>
            Message
          </span>
        </span>
      </Link>
      <Link exact to="/dashboard/paramétre" activeClassName="active">
        <span className='spanh3 justify-content-center'>
          <span className=' mx-2'>
          <img src={img5}/>
          </span>
          <span>
            Paramètere
          </span>
        </span>
      </Link>
      <Link exact to="/dashboard/support" activeClassName="active">
        <span className='spanh3 justify-content-center'>
          <span className=' mx-2'>
          <img src={img6}/>
          </span>
          <span>
            Support d'aide
          </span>
          <hr/>
        </span>
      </Link>
    </div>
    </div>
    
  )
}

export default NavBarHero