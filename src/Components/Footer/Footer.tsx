import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GiFox } from "react-icons/gi";

const Footer = () => {
  return (
    
      <Row className="fixed-bottom">
        <Col sm={12} >  
          <Navbar bg="dark" variant="dark" className="footer" >
            <Container className="justify-content-center">
              <Navbar.Brand >
                <GiFox className="image-footer" />
                - Pedro Takahashi - Front End Developer
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Col>
      </Row>

  )
}

export default Footer;