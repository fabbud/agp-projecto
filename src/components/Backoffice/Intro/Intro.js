import React from 'react';
import './Intro.css';
import Nav from 'react-bootstrap/Nav';
import whiteLogo from '../../../assets/logo/logo_RGB.jpg';

const SideBar = () => {

  return (
    <div className="Intro">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>

      <div className="login-card-section">
        <img src={whiteLogo} className="login-logo" alt="AGP" />
      </div>
    </div>
  );
};

export default Intro;
