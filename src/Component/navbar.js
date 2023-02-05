import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overlay from "react-overlay-component";
import Overlayfunc from './overlay';

function Header() {
  const url1 = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/square.png";
  const url2 = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/LOGO.png";
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const configs = {
    animate: true,
};
    return (
      <>
        <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
            <Overlayfunc></Overlayfunc>
        </Overlay>
        <Navbar  expand="lg">
            <img className='hamburger' src={url1} onClick={()=>setOverlay(true)}/>
              <Navbar.Brand href="#" ><img className='nav-link' src={url2} /></Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto"></Nav>
              </Navbar.Collapse>
      </Navbar>
      </>
    );
  }
  
  export default Header;