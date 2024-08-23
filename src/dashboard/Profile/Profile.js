import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Profile.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from './image/bg.png'
import girl from './image/girl.png'
import { Box } from './svg/Notif';
import Parametre from './svg/Parametre';
function Profile() {
  return (
    <div>
        {/**name on dashboard */}
        <div>
        <div class="container2">
            <div class="left">
                <p className=' fw-semibold'>Tableau de board</p>
            </div>
            <div class="right">
                <Box/>
                <Parametre/>
            </div>
            </div>

        </div>

        {/**name */}
        <div style={{paddingTop:70}}>
            <Container className='profile1' style={{backgroundImage:`url(${bg})`}} >
                <Row>
                    <Col>
                        <div>
                            <div>
                                <span>
                                    <p className='text1 fw-bold'>Bonjour!.</p>
                                </span>
                                {/**name */}
                                <span>
                                    <p className='text1 fw-bold'>Maria Wilson</p>
                                </span>

                            </div>
                            <div>
                                <span>
                                    <p className='text2 fw-semibold'>Bienvenue à bord!<br/>
                                        Commençons.</p>
                                </span>
                                
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div>
                               <img src={girl} className='imgGirl'/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>

    </div>
  )
}

export default Profile