import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import './Header.css';
import logoNegHeader from '../../assets/logo/logo_NEG_RGB.png';


const Header = () => {
  return ( 
    <div>
      <Navbar fixed="top" expand="lg" className="navbar">
        <Navbar.Brand href="" className="header-logo">
          {/* <img src={logoNegHeader} alt="logo" className="header-image"/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggler"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Sobre" id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">Associação</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">História do Guidismo</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Estatutos</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Associação Mundial</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pedagogia" id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">Método Guidista</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Ramo Avezinha</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Ramo Aventura</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Ramo Caravela</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Ramo Moinho</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Dirigente</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Palavra aos Pais</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Publicações" id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">Notícias</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Jornal O Trevo</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Recursos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Loja" id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">Fardas</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Livros</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Diversos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contactos" id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">Queres ser Guia ?</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Sede Nacional</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            {/* <label for="search-field"><i class="fa fa-search" style="margin-right: 10px;color: #154A7F;"></i></label> */}
            <FormControl type="text" placeholder="Pesquisa..." className="mr-sm-2 search-control" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
 
export default Header;