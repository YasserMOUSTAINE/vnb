import React from 'react'
import "../dashboard/dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import HeroBanner from './HeroBanner/HeroBanner';
import Profile from './Profile/Profile';
import bg from "./image/bg.jpg"
import { Routes, Route, Link } from 'react-router-dom';
import Emplois from './element/dashboard';
import Planification from './element/Planification';
import Etudiant from './element/Etudiant';
import Message from './element/Message';
import Parametre from './Profile/svg/Parametre';
import Support from './element/Support';

function Dashboard() {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh" // Ajustez pour que l'image couvre toute la hauteur visible
    }}>
         <Container fluid className="p-3">
      <Row className="g-0">
        {/* Première colonne - Colonne fixe */}
        <Col xs={12} md={4} lg={3} className="div-1 banner  ">
          <div>
            <HeroBanner/>
          </div>
        </Col>

        {/* Deuxième colonne - Ajustable */}
        <Col xs={12} md={8} lg={9} className=" p-3">
          <Row className="g-0">
            {/* Div 3 */}
            <Col xs={12} className="div3  p-3 mb-2">
              <div>
                <Profile/>
              </div>
            </Col>

            {/* Div 4 */}
            <Col xs={12} className="div4  p-3">
              <div>
                <Routes>
                  <Route path='/dashboard/emplois' element={<Emplois/>}/>
                  <Route path='/dashboard/planification' element={<Planification/>}/>
                  <Route path='/dashboard/etudiant' element={<Etudiant/>}/>
                  <Route path='/dashboard/message' element={<Message/>}/>
                  <Route path='/dashboard/paramétre' element={<Parametre/>}/>
                  <Route path='/dashboard/support' element={<Support/>}/>
                </Routes>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Dashboard