import React from 'react'
import './login.css'
import girl from "./image/girl.png"
import vector1 from "./image/Vector.png"
import google from "./image/google.png"
import fb from "./image/f1.png"
import groupImage from '../../image/Group.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import SVG1 from './image/GoogleSVG'
import Svg2 from './image/Svg2'
import Vector1 from './image/Vector1'
import Vector2 from './image/Vector2'
import Vector3 from './image/Vector3'
import Vec4 from './image/Vec4'
import Vec5 from './image/Vec5'
import ToggleSwitch from './image/ToggleSwitch'
import Svg7 from './Svg7'
function Login() {
  return (
    <div style={{ backgroundImage: `url(${groupImage})`}} className='bod'>
        <div className='container m-0 p-0'>
        <div className='row'>
          <div className='col'>
            <div className='image-container'>
             
              <img src={girl} className='img'style={{position:"absolute"}} alt="Girl" />
              <SVG1 />
              <Svg2/>
              <Vector1/>
              <Vector2/>
              <Vector3/>
              <Vec4/>
              <Vec5/>
        </div>
        </div>
        {/***connexion */}
        
        <div className='col text-center'>
            <div style={{width:400,margin:70}}>
            <div>
                <h3 style={{fontSize: 36}}>Connexion</h3>
                <p style={{fontSize: 18}}>Connectez-vous à votre compte</p>
            </div>

            {/**log fb-google */}
            <div className=''>
                <button className='btn-GF' style={{borderColor:"#F67F19"}}>
                    <img src={google} style={{width:22,height:22,marginBottom:3,marginRight:4}} />
                    <span>Google</span>
                </button>
                <button className='btn-GF' style={{borderColor:"#DEDEDE"}}>
                <img src={fb} style={{width:26,height:26,marginBottom:3,marginRight:4}} />
                <span>Facebook</span>
                </button>
            </div>

            <div>
            <div class="containerr">
                <span class="line"></span>
                <span class="text" style={{fontSize:13}}>Ou continuez avec</span>
                <span class="line"></span>
            </div>
                
            </div>

            {/**formulaire */}
            <div>
                <input type='text' placeholder='E-mail' className='inp'/><br/>
                <input type='password' placeholder='Mot de passe' className='inp'/>
            </div>

            <div className='toogle'>
                {/**toogle */}
                <span style={{display:"inline-flex"}}>
                    <ToggleSwitch/>
                <p style={{fontSize:14}}>Souviens-toi de moi</p>
                </span>
                <div className='recuperer'>
                    <a style={{fontSize:14}}>Récupérer mot de passe</a>
                </div>
                
            </div>

            {/**button connect */}
            <div>
                <button className='log'>
                    <span style={{fontSize:18,color:'white'}}>Je me connecte - Espace Enseignant</span>
                </button>
            </div>

            {/**inscription */}
            <div className='footer-log'>
                <p>Vous n'avez pas de compte ? .<a className='a-foot fw-bold'> Inscription</a></p>
                <p>Vous n'êtes pas enseignant ? <a className='a-foot fw-bold'>Espace candidat</a> </p>
            </div>
            <Svg7/>
        </div>
            </div>
        </div>
        </div>
   
    </div>
  )
}

export default Login