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
            <NavDropdown title={t('header.sobre')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('associacao')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('historiaGuidismo')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('estatutos')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('associacaoMundial')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('pedagogia')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('metodoGuidista')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('ramoAvezinha')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('ramoAventura')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('ramoCaravela')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('ramoMoinho')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('dirigente')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('palavrasPais')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('publicacoes')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('noticias')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('jornal')}</NavDropdown.Item>
              <NavDropdown bsPrefix="dropdown-item" title={t('recursos')} className="dropright">
                <NavDropdown.Item className="dropdown-item" href="">{t('livroEspecialidades')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="">{t('regulamentos')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="">{t('cartaoAssociada')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="">{t('ligacoesUteis')}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t('loja')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('fardas')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('livros')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('diversos')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('contactos')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('queresSerGuia')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('sedeNacional')}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="search-languages">
            <Form inline className="search-fields">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <FormControl type="text" placeholder={t('pesquisa')} className="mr-sm-2 search-input" />
            </Form>
            <LanguageSelector />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
