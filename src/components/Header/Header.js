import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import './Header.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="" className="header-logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={t('sobre.label')} id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">{t('associacao.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('historiaGuidismo.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('estatutos.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('associacaoMundial.label')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('pedagogia.label')} id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">Método Guidista</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Ramo Avezinha</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Ramo Aventura</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Ramo Caravela</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Ramo Moinho</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Dirigente</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Palavra aos Pais</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('publicacoes.label')} id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">Notícias</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Jornal O Trevo</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Recursos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('loja.label')} id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">Fardas</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Livros</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Diversos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('contactos.label')} id="basic-nav-dropdown" class="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">Queres ser Guia ?</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">Sede Nacional</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline className="search-fields">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <FormControl type="text" placeholder={t('pesquisa.label')} className="mr-sm-2 search-input" />
          </Form> */}
          <div className="search-languages">
            <Form inline className="search-fields">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <FormControl type="text" placeholder={t('pesquisa.label')} className="mr-sm-2 search-input" />
            </Form>
            <LanguageSelector />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
