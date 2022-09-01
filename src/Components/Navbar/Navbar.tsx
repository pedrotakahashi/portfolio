import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuTopSide = () => {
  return (
    <Row>
      <Col sm={12} lg={12} className="navbar">
        <Navbar expand="lg"> 
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="">
                  <Nav.Item>
                    <Nav.Link className='navbar-item' href={process.env.PUBLIC_URL +'#'}>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className='navbar-item' href={process.env.PUBLIC_URL +"#/sobre"}>Sobre</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className='navbar-item' href={process.env.PUBLIC_URL +"#/projetos"}>Projetos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className='navbar-item' href={process.env.PUBLIC_URL +"#/contato"}>Contato</Nav.Link>
                  </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
       
        </Col>
      </Row>
    

  )
}

export default MenuTopSide;