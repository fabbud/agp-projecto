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
      <Navbar fixed="top" expand="lg" className="navbar">
        <Navbar.Brand href="" className="header-logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={t('sobre.label')} id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">{t('associacao.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('historiaGuidismo.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('estatutos.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('associacaoMundial.label')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('pedagogia.label')} id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">{t('metodoGuidista.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('ramoAvezinha.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('ramoAventura.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('ramoCaravela.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('ramoMoinho.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('dirigente.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('palavrasPais.label')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('publicacoes.label')} id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">{t('noticias.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('jornal.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('recursos.label')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('loja.label')} id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">{t('fardas.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('livros.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('diversos.label')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('contactos.label')} id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item className="dropdown-item" href="">{t('queresSerGuia.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('sedeNacional.label')}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
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
