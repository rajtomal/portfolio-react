import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navber_modul.css'
import Logo from '../../images/logo.png'

function Navber() {
  return (
    <Navbar className='navber-part' expand="lg">
      <Container>
        <a className='logo' href="#">
            <img src={Logo} alt="" />
            </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a className='menu-ber' href="#home">Home</a>
            <a className='menu-ber' href="#link">About Us</a>
            <a className='menu-ber' href="#link">Service</a> 
            <a className='menu-ber' href="#link">Protfolio</a>
            <a className='menu-ber' href="#link">Contact</a>
            <a className='nav-btn' href="#">Resume</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navber;