import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BackSidebar.css';
import brasaoLogo from '../../../assets/logo/brasao_RGB.png';

const BackSidebar = () => {
  return (
    <div className="BackSidebar">
      <Link to="/backoffice/intro">
        <img className="brasao-logo" src={brasaoLogo} alt="Logo" />
      </Link>
      <Nav fixed="left">
        <Nav.Link href="/backoffice/homepage">Homepage</Nav.Link>
        <Nav.Link href="/backoffice/news/painel">Notícias</Nav.Link>
        <Nav.Link href="/backoffice/journal">Jornal</Nav.Link>
      </Nav>
    </div>
  );
};

export default BackSidebar;
