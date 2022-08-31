import React from "react";
import { Nav } from "react-bootstrap";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <Nav className="justify-content-end navbar">
      <Nav.Item>
        <Nav.Link className='navbar-item' href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='navbar-item' href="/sobre">Sobre</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='navbar-item' href="/projetos">Projetos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='navbar-item' href="/contato">Contato</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar;